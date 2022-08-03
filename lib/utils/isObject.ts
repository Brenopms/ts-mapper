export const isObject = (obj: any): boolean => {
  return obj && typeof obj === "object" && !Array.isArray(obj);
};
