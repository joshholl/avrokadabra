import { SampleDataGenerator } from "./Generator"

export function stringGenerator() :SampleDataGenerator {
    return {
        generate: () => {
            return "avrokadabra"
        }
    }
}