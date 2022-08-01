import get from "lodash.get";
import { GenericObject } from "../interfaces/genericObj";
import { Paths } from "../interfaces/paths.interface";

export function getByPath<T extends GenericObject, O = unknown, S = unknown>(
  obj: T,
  path: Paths<T, 3> & string,
  defaultValue?: S
): O;

export function getByPath<T extends GenericObject, O = unknown>(
  obj: T,
  path: Paths<T, 3> & string,
  defaultValue?: unknown
): O {
  const traversablePath = path?.split(".");
  const value = get(obj, path, defaultValue) as O
  return value
}
