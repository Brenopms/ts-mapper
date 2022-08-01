import { GenericObject } from './genericObj.interface';
import { Mapper } from './mapper.interface';

export type MapperFn = <
  T extends GenericObject,
  S extends GenericObject
  >(
  input: T,
  mapper: Mapper<T, S>
) => S;
