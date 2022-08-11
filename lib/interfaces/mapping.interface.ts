import { MappingValue } from "./mappingValue.interface";

/**
 * Collection of mapping values. It set up all the rules of object transformation, from the source
 * object to the destiny
 */
export type Mapping<T extends object, O extends object> = MappingValue<T, O>[];
