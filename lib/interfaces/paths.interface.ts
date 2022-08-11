import { Join } from "./join.interface";
import { Prev } from "./prev.interface";

/**
 * Creates all the possible paths to access a value inside of an object of a given type
 *
 * @template T Object type for accessing values
 * @template D Max depth of object keys
 */
export type Paths<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? {
      [K in keyof T]-?: K extends string | number
        ? `${K}` | Join<K, Paths<T[K], Prev[D]>>
        : never;
    }[keyof T]
  : "";
