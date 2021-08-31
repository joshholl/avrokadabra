import { SampleDataGenerator } from "./Generator";
import {sample} from 'lodash'
export function byteGenerator(): SampleDataGenerator{
    return {
        generate: () => {
            return "\u0ff0"
        }
    }
}