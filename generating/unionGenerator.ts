import { sample } from "lodash";
import { SampleDataGenerator } from "./Generator";

export function unionGenerator(generators: SampleDataGenerator[]) {
    return {
        generate: () => {
            const generator = sample(generators);
            return !!generator  && generator.generate();
        }
    }
}