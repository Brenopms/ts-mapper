import get from "lodash.get";
import { GenericObject } from "../interfaces/genericObj.interface";
import { Paths } from "../interfaces/paths.interface";

export type Getter<T, O, S = unknown> = (
  path: Paths<T, 3> & string,
  defaultValue?: S
) => O;

export function getByPath<T extends GenericObject, O = unknown, S = unknown>(
  obj: T
): Getter<T, O, S>;

export function getByPath<T extends GenericObject, O = unknown>(
  obj: T
): Getter<T, O>;

export function getByPath<T extends GenericObject, O = unknown>(obj: T) {
  return function Getter<T>(
    path: Paths<T, 3> & string,
    defaultValue?: unknown
  ): O {
    const traversablePath = path?.split(".") || [];
    const value = get(obj, traversablePath, defaultValue) as O;
    return value;
  };
}
