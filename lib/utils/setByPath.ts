import { Paths } from "../interfaces/paths.interface";
import { deepClone } from "./deepClone";
import { isObject } from "./isObject";
import { GenericObject } from "../interfaces/genericObj";
import { MAX_OBJECT_DEPTH } from "../constants/maxObjectDepth";
import set from "lodash.set";

export function setByPath<T extends GenericObject>(
  obj: T,
  path: string,
  value: unknown,
  pathSeparator?: string
): unknown;

export function setByPath<T extends GenericObject, K extends keyof T>(
  obj: T,
  path: Paths<T, MAX_OBJECT_DEPTH> & string,
  value: T[K],
  pathSeparator = "."
): T {
  if (!isObject(obj)) {
    return {} as T;
  }

  const traversablePath = path?.split(pathSeparator) || [];
  const newObj = deepClone(obj);

  return set<T>(newObj, traversablePath, value);
}
