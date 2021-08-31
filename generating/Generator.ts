export interface SampleDataGenerator {
    generate: () => unknown
}

export type NamedGenerator = [string, SampleDataGenerator]