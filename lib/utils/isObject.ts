/**
 * Checks if a given value is an object
 *
 * @param value Value to be checked
 * @returns boolean stating is value is an object
 */
export const isObject = (value: any): boolean => {
  return value && typeof value === "object" && !Array.isArray(value);
};
