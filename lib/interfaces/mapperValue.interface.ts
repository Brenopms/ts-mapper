import { MAX_OBJECT_DEPTH } from "../constants/maxObjectDepth";
import { Getter } from '../utils/getByPath';
import { Paths } from "./paths.interface";

export interface MapperValue<T extends {}, O extends {}> {
  defaultValue: unknown;
  srcPath?: Paths<T, MAX_OBJECT_DEPTH>;
  dstPath: Paths<O, MAX_OBJECT_DEPTH>;
  transform?(getter: Getter<T, any>): any;
}

