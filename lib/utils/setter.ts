import { Paths } from "../interfaces/paths.interface";
import { deepClone } from "./deepClone";
import { isObject } from "./isObject";
import { GenericObject } from '../interfaces/genericObj'

export function setByPath<T extends GenericObject, K extends keyof T>(
  obj: T,
  path: Paths<T, 3> & string,
  value: T[K]
): T {
  if (!isObject(obj)) {
    return {} as T;
  }

  const traversablePath = path?.split(".");
  let currentObjectKey = deepClone(obj);

  traversablePath?.forEach((key: keyof T, index) => {
    // Last depth for setting value
    if (index === traversablePath.length - 1) {
      currentObjectKey[key] = value;
    } else {
      if (!currentObjectKey[key]) {
        currentObjectKey[key] = {} as T[K];
      }
      currentObjectKey = currentObjectKey[key] as unknown as T;
    }
  });
  console.log(currentObjectKey)
  return currentObjectKey;
}
