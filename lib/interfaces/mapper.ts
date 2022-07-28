import { MAX_OBJECT_DEPTH } from "../constants/maxObjectDepth";
import { GenericObject } from "./genericObj";
import { Paths } from "./paths.interface";

type TransformFn<T, O> = (value: T) => O;

export interface MapperValue<T extends {}, O extends {}> {
  defaultValue: unknown;
  srcPath?: Paths<T, MAX_OBJECT_DEPTH>;
  dstPath: Paths<O, MAX_OBJECT_DEPTH>;
  value?: unknown;
  transform?<S>(value: T);
}

export type Mapper<T extends {}, O extends {}> = MapperValue<T, O>[];

export type MapperFn = <
  T extends GenericObject,
  S extends GenericObject
  >(
  input: T,
  mapper: Mapper<T, S>
) => S;
