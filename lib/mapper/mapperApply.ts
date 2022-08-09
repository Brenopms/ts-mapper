import { MappingValue } from "../interfaces/mappingValue.interface";
import { getByPath } from "../utils/getByPath";

/**
 * Apply the mapper for only one field of the mapping 
 * @param input - Source object to be transformed
 * @param mapperValue - Value to be mapped
 * @returns Transformed object result
 */
export const mapperApply = <T extends object, O extends object>(
  input: T,
  mapperValue: MappingValue<T, O>,
) => {
  if (mapperValue.srcPath) {
    return getByPath(input)(mapperValue.srcPath, mapperValue.defaultValue);
  }

  if (mapperValue.transform) {
    return mapperValue?.transform?.(getByPath<T>(input));
  }

  return mapperValue.defaultValue;
};
