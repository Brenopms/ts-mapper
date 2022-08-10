import { MAX_OBJECT_DEPTH } from "../constants/maxObjectDepth";
import { Getter } from "./getter.interface";
import { Paths } from "./paths.interface";

export interface MappingValue<T extends object, O extends object> {
  defaultValue: unknown;
  srcPath?: Paths<T, MAX_OBJECT_DEPTH>;
  dstPath: Paths<O, MAX_OBJECT_DEPTH>;
  transform?(getter: Getter<T, any>): any;
}
