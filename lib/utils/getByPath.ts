import get from "lodash.get";
import { MAX_OBJECT_DEPTH } from "../constants/maxObjectDepth";
import { GenericObject } from "../interfaces/genericObj.interface";
import { Getter } from "../interfaces/getter.interface";
import { Paths } from "../interfaces/paths.interface";

export function getByPath<T extends GenericObject, O = unknown, S = unknown>(
  obj: T,
): Getter<T, O, S>;

export function getByPath<T extends GenericObject, O = unknown>(
  obj: T,
): Getter<T, O>;

export function getByPath<T extends GenericObject, O = unknown>(obj: T) {
  return function Getter<T>(
    path: Paths<T, MAX_OBJECT_DEPTH> & string,
    defaultValue?: unknown,
  ): O {
    const traversablePath = path?.split(".") || [];
    const value = get(obj, traversablePath, defaultValue) as O;
    return value;
  };
}
