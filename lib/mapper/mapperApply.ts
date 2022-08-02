import { MapperValue } from "../interfaces/mapperValue.interface";
import { getByPath } from "../utils/getByPath";

export const mapperApply = <T, O>(input: T, mapperValue: MapperValue<T, O>) => {
  if (mapperValue.srcPath) {
    return getByPath(input)(mapperValue.srcPath, mapperValue.defaultValue);
  }

  if (mapperValue.transform) {
    return mapperValue?.transform?.(getByPath<T>(input));
  }

  return mapperValue.defaultValue;
};
