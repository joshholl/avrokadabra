import { random } from "lodash"
import { SampleDataGenerator } from "./Generator"

const MIN_32_SIGNED_32_BIT_INTEGER = -2147483648
const MAX_32_SIGNED_32_BIT_INTEGER = 2147483647




export function intGenerator(): SampleDataGenerator {
    return {
        generate: () => random(MIN_32_SIGNED_32_BIT_INTEGER,MAX_32_SIGNED_32_BIT_INTEGER,false)
        
    }
}
export function longGenerator(): SampleDataGenerator {
    return {
        generate: () => random(MIN_32_SIGNED_32_BIT_INTEGER,MAX_32_SIGNED_32_BIT_INTEGER,false)
        
    }
}
export function floatGenerator(): SampleDataGenerator {
    return {
        generate: () => random(MIN_32_SIGNED_32_BIT_INTEGER,MAX_32_SIGNED_32_BIT_INTEGER,false)
        
    }
}
export function doubleGenerator(): SampleDataGenerator {
    return {
        generate: () => random(MIN_32_SIGNED_32_BIT_INTEGER,MAX_32_SIGNED_32_BIT_INTEGER,false)
        
    }
}