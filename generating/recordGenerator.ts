
import { NamedGenerator, SampleDataGenerator } from "./Generator"



export function recordGenerator(fieldGenerators: NamedGenerator[]) :SampleDataGenerator {
    return {
        generate: () => {
            console.debug('generating record')
            for(const [n,g] of fieldGenerators) {
                console.debug(n,g.generate())
            }
            return Object.fromEntries(fieldGenerators.map(([name, generator]) => ([name, generator.generate()])))
        }
    }
}