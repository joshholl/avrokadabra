
import fs from 'fs/promises';
import path from 'path';
import { NamedObject, TypedObject, RecordDeclaration, EnumDeclaration, Primitive, isPrimative, isStructure, isEnum } from '../declarations';
import { booleanGenerator } from '../generating/booleanGenerator';
import { byteGenerator } from '../generating/byteGenerator';
import { enumGenerator } from '../generating/enumGenerator';
import { NamedGenerator, SampleDataGenerator } from '../generating/Generator';
import { doubleGenerator, floatGenerator, intGenerator, longGenerator } from '../generating/intGenerator';
import { nullGenerator } from '../generating/nullGenerator';
import { recordGenerator } from '../generating/recordGenerator';
import { stringGenerator } from '../generating/stringGenerator';
import { unionGenerator } from '../generating/unionGenerator';

type GeneratorBuilder = () => SampleDataGenerator

const PrimativeGenerators: Record<Primitive, GeneratorBuilder> = {
    "boolean": () => booleanGenerator(),
    "bytes": () => byteGenerator(),
    "double": () => doubleGenerator(),
    "fixed": () => byteGenerator(),
    "float": () => floatGenerator(),
    "int": () => intGenerator(),
    "long": () => longGenerator(),
    "null": () => nullGenerator(),
    "string": () => stringGenerator(),
}




const parseRecord = (fields: NamedObject[]): NamedGenerator[] => {
    return fields.map(x => ([x.name, parseSection(x)]))
}

const parseSection = (obj: TypedObject): SampleDataGenerator => {

    if(Array.isArray(obj.type)) {
        const primativeTypeGenerators = obj.type.filter(isPrimative).map(x => PrimativeGenerators[x]())
        return unionGenerator(primativeTypeGenerators)
    }
    if(isPrimative(obj.type)) {
        return PrimativeGenerators[obj.type]()
    }
    if(isStructure(obj.type)) {
        const mappedFields = parseRecord((<RecordDeclaration>obj).fields);
        return recordGenerator(mappedFields)
    }
    if(isEnum(obj.type)) {
        return enumGenerator((<EnumDeclaration>obj).symbols);
    }
    throw Error("Didn't Parse The Thing" + JSON.stringify(obj))

}





export async function parseSchema(filename: string) {
    const stat = await fs.lstat(filename);
    if(!stat.isFile()) {
        console.error("Unable to find schema file")
    }
    const file = await fs.readFile(filename, 'utf-8');
    const schemaJson = JSON.parse(file);
    console.log(schemaJson)
    const obj = parseSection(schemaJson)
    console.log('the resulting data was ', JSON.stringify(obj.generate()));
}