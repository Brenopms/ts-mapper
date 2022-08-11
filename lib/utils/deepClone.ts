/**
 * Created a deep copy of a given object
 *
 * @param obj input object
 * @returns Cloned object
 */
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
