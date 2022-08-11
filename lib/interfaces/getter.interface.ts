import { MAX_OBJECT_DEPTH } from "../constants/maxObjectDepth";
import { Paths } from "./paths.interface";

/**
 * Curried function to access a value of an object, given a path
 *
 * @template T Object type to be accessed
 * @template O Result value type
 * @template S Default value type
 */
export type Getter<T, O, S = unknown> = (
  path: Paths<T, MAX_OBJECT_DEPTH> & string,
  defaultValue?: S,
) => O;
