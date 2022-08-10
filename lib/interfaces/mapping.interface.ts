import { MappingValue } from "./mappingValue.interface";

export type Mapping<T extends object, O extends object> = MappingValue<T, O>[];
