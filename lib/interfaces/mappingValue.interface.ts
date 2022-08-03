import { MAX_OBJECT_DEPTH } from "../constants/maxObjectDepth";
import { GenericObject } from './genericObj.interface';
import { Getter } from './getter.interface';
import { Paths } from "./paths.interface";

export interface MappingValue<T extends GenericObject, O extends GenericObject> {
  defaultValue: unknown;
  srcPath?: Paths<T, MAX_OBJECT_DEPTH>;
  dstPath: Paths<O, MAX_OBJECT_DEPTH>;
  transform?(getter: Getter<T, any>): any;
}

