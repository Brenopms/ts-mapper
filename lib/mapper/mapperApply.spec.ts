import { describe, it, expect, vi } from "vitest";
import { MapperValue } from "../interfaces/mapperValue.interface";
import { mapperApply } from "./mapperApply";

describe("Testing mapperApply function", () => {
  it("Should return the source path value from a given object", () => {
    const inputObj = { a: 1, b: 2 };
    const mapperValue: MapperValue<any, any> = {
      srcPath: "a",
      dstPath: "x",
      defaultValue: undefined,
    };
    const result = mapperApply(inputObj, mapperValue);

    expect(result).toBe(inputObj.a);
  });

  it("Should return the default value if source path is passed but its not valid", () => {
    const inputObj = { a: 1, b: 2 };
    const mapperValue: MapperValue<any, any> = {
      srcPath: "z.f",
      dstPath: "x",
      defaultValue: 500,
    };
    const result = mapperApply(inputObj, mapperValue);
    expect(result).toBe(500);
  });

  it("Should apply the transform function if srcPath is not defined", () => {
    const inputObj = { a: 1, b: 2 };
    const mapperValue: MapperValue<any, any> = {
      dstPath: "x",
      defaultValue: undefined,
      transform(getter) {
        return getter("a") + getter("b");
      },
    };

    const transformSpy = vi.spyOn(mapperValue, "transform");

    const result = mapperApply(inputObj, mapperValue);

    expect(result).toBe(inputObj.a + inputObj.b);
    expect(transformSpy).toHaveBeenCalledOnce();
  });

  it("Should return the default value if transform and srcPath are not defined", () => {
    const inputObj = { a: 1, b: 2 };
    const mapperValue: MapperValue<any, any> = {
      dstPath: "x",
      defaultValue: 100,
    };

    const result = mapperApply(inputObj, mapperValue);
    expect(result).toBe(100);
  });
});

