import { GenericObject } from "../interfaces/genericObj.interface";
import { Mapper } from "../interfaces/mapper.interface";
import { MapperFn } from "../interfaces/mapperFn.interface";
import { setByPath } from "../utils/setByPath";
import { mapperApply } from "./mapperApply";

export const mapper: MapperFn = <
  T extends GenericObject,
  S extends GenericObject
>(
  input: T,
  mapper: Mapper<T, S>
): S => {
  let mapperResult = {} as S;

  mapper.forEach((mapperValue) => {
    const mapperResultValue = mapperApply<T, S>(input, mapperValue);
    mapperResult = setByPath<S, keyof S>(
      mapperResult,
      mapperValue.dstPath,
      mapperResultValue
    );
  });

  return mapperResult;
};
