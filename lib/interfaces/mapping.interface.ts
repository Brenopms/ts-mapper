import { MappingValue } from "./mappingValue.interface";

/**
 * Collection of mapping values. It set up all the rules of object transformation, from the source
 * object to the destiny
 *
 * @template T Source object
 * @template O Output object
 */
export type Mapping<T extends object, O extends object> = MappingValue<T, O>[];
