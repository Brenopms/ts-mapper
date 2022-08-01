import { Paths } from "../interfaces/paths.interface";
import { deepClone } from "./deepClone";
import { isObject } from "./isObject";
import { GenericObject } from "../interfaces/genericObj";
import { MAX_OBJECT_DEPTH } from "../constants/maxObjectDepth";

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
  let referenceValue = newObj;

  for (const [index, entry] of traversablePath.entries()) {
    if (index == traversablePath.length - 1) {
      referenceValue[entry as keyof T] = value;
    } else {
      referenceValue = referenceValue[entry as keyof T];
    }
  }

  return newObj;
}
