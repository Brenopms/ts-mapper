import { GenericObject } from "./genericObj.interface";
import { MappingValue } from "./mappingValue.interface";

export type Mapping<
  T extends GenericObject,
  O extends GenericObject,
> = MappingValue<T, O>[];
