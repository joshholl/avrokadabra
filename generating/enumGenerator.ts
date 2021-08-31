import { SampleDataGenerator } from "./Generator";
import {sample} from 'lodash'
export function enumGenerator(symbols: String[]): SampleDataGenerator{
    return {
        generate: () => {
            return sample(symbols)
        }
    }
}