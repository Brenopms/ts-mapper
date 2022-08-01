import { GenericObject } from '../interfaces/genericObj.interface';
import { Mapper } from '../interfaces/mapper.interface';
import { MapperFn } from '../interfaces/mapperFn.interface';
import { MapperValue } from "../interfaces/mapperValue.interface";
import { Paths } from '../interfaces/paths.interface';
import { getByPath } from "../utils/getByPath";
import { setByPath } from "../utils/setByPath";

const mapperApply = <T, O>(input: T, mapperValue: MapperValue<T, O>) => {
  console.log(input);
  console.log(mapperValue);
  if (mapperValue.value !== undefined) {
    return mapperValue;
  }

  if (mapperValue.srcPath) {
    return (
      getByPath(input, mapperValue.srcPath, mapperValue.defaultValue) ||
      mapperValue.defaultValue
    );
  }

  if (mapperValue.transform) {
    return mapperValue?.transform?.(input);
  }

  return mapperValue.defaultValue;
};

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
    console.log(mapperResultValue);
    mapperResult = setByPath<S, keyof S>(
      mapperResult,
      mapperValue.dstPath,
      mapperResultValue
    );
  });

  return mapperResult;
};
