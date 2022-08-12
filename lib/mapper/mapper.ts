import { Mapping } from "../interfaces/mapping.interface";
import { MapperFn } from "../interfaces/mapperFn.interface";
import { setByPath } from "../utils/setByPath";
import { mapperApply } from "./mapperApply";

/**
 * Applies all the rules specified in the Mapping to the source object, creating the destiny object accordingly
 *
 * @param input Object to be transformed
 * @param mapping Mapping object with the transformation rules
 * @returns Mapped object
 * @template T Input type
 * @template S Output type
 */
export const mapper: MapperFn = <T extends object, S extends object>(
  input: T,
  mapping: Mapping<T, S>,
): S => {
  let mapperResult = {} as S;

  mapping.forEach((mapperValue) => {
    const mapperResultValue = mapperApply<T, S>(input, mapperValue);
    mapperResult = setByPath<S, keyof S>(
      mapperResult,
      mapperValue.dstPath,
      mapperResultValue,
    );
  });

  return mapperResult;
};
