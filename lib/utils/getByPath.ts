import get from "lodash.get";
import { MAX_OBJECT_DEPTH } from "../constants/maxObjectDepth";
import { Getter } from "../interfaces/getter.interface";
import { Paths } from "../interfaces/paths.interface";

/**
 * Get an value inside of an object given a key to be accessed
 * inside of it
 *
 * @param obj Object that contains the value
 * @returns Curried getter function the accepts the path and a default value
 */
export function getByPath<T extends object, O = unknown, S = unknown>(
  obj: T,
): Getter<T, O, S>;

export function getByPath<T extends object, O = unknown>(obj: T): Getter<T, O>;

export function getByPath<T extends object, O = unknown>(obj: T) {
  return function Getter<T>(
    path: Paths<T, MAX_OBJECT_DEPTH> & string,
    defaultValue?: unknown,
  ): O {
    const traversablePath = path?.split(".") || [];
    const value = get(obj, traversablePath, defaultValue) as O;
    return value;
  };
}
