import { GenericObject } from './genericObj.interface';
import { Mapping } from './mapping.interface';

export type MapperFn = <
  T extends GenericObject,
  S extends GenericObject
  >(
  input: T,
  mapper: Mapping<T, S>
) => S;
