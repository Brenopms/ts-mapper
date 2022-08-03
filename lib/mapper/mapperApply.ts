import { MappingValue } from "../interfaces/mappingValue.interface";
import { getByPath } from "../utils/getByPath";

export const mapperApply = <T, O>(input: T, mapperValue: MappingValue<T, O>) => {
  if (mapperValue.srcPath) {
    return getByPath(input)(mapperValue.srcPath, mapperValue.defaultValue);
  }

  if (mapperValue.transform) {
    return mapperValue?.transform?.(getByPath<T>(input));
  }

  return mapperValue.defaultValue;
};
