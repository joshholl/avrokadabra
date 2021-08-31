#!/usr/bin/env node

import {program} from "commander"
import { parseSchema } from "./parsing";
import path from "path"
import fs from "fs"

program.description('A naive data generator for avro schemas').option('-s, --schema <schema>', 'The file path to your source schema').parse(process.argv)
const options = program.opts();

if(options.schema) {
    console.log(options.schema)
    parseSchema(options.schema)
}
if(!process.argv.slice(2).length){
    program.outputHelp();
}