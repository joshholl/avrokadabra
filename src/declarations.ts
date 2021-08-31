export interface TypedObject {
    type: string | string[]
}
export interface RecordDeclaration extends TypedObject {
    fields: NamedObject[]
}

export interface NamedObject extends TypedObject {
    name: string
}
export interface EnumDeclaration extends TypedObject {
    name: string,
    symbols: string[]
}

export type Primitive = "null" | "boolean" | "int"|"long"|"float"|"double"|"bytes"|"string"|"fixed"
export type StructureType = "record" | "map"

export const isPrimative = (name: string): name is Primitive => {
  const primatives:Primitive[] = ["null" , "boolean" , "int","long","float","double","bytes","string","fixed"];
  return primatives.some(x => x === name)
}
export const isStructure = (type: string)=> type === "record"|| type === "map"
export const isEnum = (type: string) => type === "enum"
