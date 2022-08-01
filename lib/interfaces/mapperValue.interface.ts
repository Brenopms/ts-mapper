import { MAX_OBJECT_DEPTH } from "../constants/maxObjectDepth";
import { Paths } from "./paths.interface";

export interface MapperValue<T extends {}, O extends {}> {
  defaultValue: unknown;
  srcPath?: Paths<T, MAX_OBJECT_DEPTH>;
  dstPath: Paths<O, MAX_OBJECT_DEPTH>;
  value?: unknown;
  transform?<S>(value: T): any;
}