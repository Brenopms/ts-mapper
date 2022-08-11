import { Paths } from "../interfaces/paths.interface";
import { deepClone } from "./deepClone";
import { isObject } from "./isObject";
import { MAX_OBJECT_DEPTH } from "../constants/maxObjectDepth";
import set from "lodash.set";

/**
 * Sets a value inside of object according to the passed key
 * This function is pure and will return a new object
 *
 * @param obj Object to be modified
 * @param path Path of the value to be added
 * @param value Value to be added to object
 * @param pathSeparator Path separator
 */
export function setByPath<T extends object>(
  obj: T,
  path: string,
  value: unknown,
  pathSeparator?: string,
): unknown;

export function setByPath<T extends object, K extends keyof T>(
  obj: T,
  path: Paths<T, MAX_OBJECT_DEPTH> & string,
  value: T[K],
  pathSeparator?: string,
): T;

export function setByPath<T extends object, K extends keyof T>(
  obj: T,
  path: Paths<T, MAX_OBJECT_DEPTH> & string,
  value: T[K],
  pathSeparator = ".",
): T {
  if (!isObject(obj)) {
    return {} as T;
  }

  const traversablePath = path?.split(pathSeparator) || [];
  const newObj = deepClone(obj);

  return set<T>(newObj, traversablePath, value);
}
