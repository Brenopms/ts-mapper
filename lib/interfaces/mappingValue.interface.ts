import { MAX_OBJECT_DEPTH } from "../constants/maxObjectDepth";
import { Getter } from "./getter.interface";
import { Paths } from "./paths.interface";

/**
 * Rules for mapping a value inside a given object to the destiny value
 *
 * @template T Source object type
 * @template D Destiny object type
 */
export interface MappingValue<T extends object, O extends object> {
  /**
   * Fallback value. If the src path is invalid and no transform function is passed,
   * the return value will be the default
   */
  defaultValue: unknown;
  /**
   * Object path from the source object to be accessed
   */
  srcPath?: Paths<T, MAX_OBJECT_DEPTH>;
  /**
   * Object path to be saved in the destiny object
   */
  dstPath: Paths<O, MAX_OBJECT_DEPTH>;
  /**
   * Optional function to transform one or multiple values from source object
   * to the destiny object
   * @param getter Curried function to access safely any value from the source object
   */
  transform?(getter: Getter<T, any>): any;
}
