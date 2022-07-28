import { Mapper, MapperFn, MapperValue } from "../interfaces/mapper";
import { getByPath } from "../utils/pathGet";
import { setByPath } from "../utils/setter";

const mapperApply = <T, O>(input: T, mapperValue: MapperValue<T, O>) => {
  console.log(input)
  console.log(mapperValue)
  if (mapperValue.value !== undefined) {
    return mapperValue;
  }

  if (mapperValue.srcPath) {
    return getByPath(input, mapperValue.srcPath, mapperValue.defaultValue);
  }

  if (mapperValue.transform) {
    return mapperValue?.transform?.(input)
  }

  return mapperValue.defaultValue;
};

export const mapper: MapperFn = <T extends Record<string, unknown>, S extends Record<string, unknown>>(input: T, mapper: Mapper<T, S>): S => {
  let mapperResult = {} as S;

  mapper.forEach((mapperValue) => {
    const mapperResultValue = mapperApply<T, S>(input, mapperValue);
    console.log(mapperResultValue)
    mapperResult = setByPath<S, keyof S>(mapperResult, mapperValue.dstPath, mapperResultValue);
  });

  return mapperResult;
};
