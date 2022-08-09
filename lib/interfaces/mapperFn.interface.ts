import { Mapping } from "./mapping.interface";

export type MapperFn = <T extends object, S extends object>(
  input: T,
  mapper: Mapping<T, S>,
) => S;
