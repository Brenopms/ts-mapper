import { Mapping } from "./mapping.interface";

/**
 * Applies all the rules specified in the Mapping to the source object, creating
 * the destiny object accordingly
 *
 * @template T Input type
 * @template S Output type
 */
export type MapperFn = <T extends object, S extends object>(
  input: T,
  mapper: Mapping<T, S>,
) => S;
