import { expect, describe, it } from "vitest";
import { setByPath } from "./setByPath";

describe("Testing setByPath function", () => {
  it("Should return an empty object if an invalid object is passed", () => {
    const result = setByPath(null as any, "a.b.c", "test");
    expect(result).toMatchObject({});
  });

  it("Should not add any property if path is empty or invalid", () => {
    const inputObj = { a: 1, b: { c: 2 } };
    const path = "";
    const value = 100;

    const result = setByPath(inputObj, path, value);
    expect(result).toMatchObject({ a: 1, b: { c: 2 } });
  })

  it("Should NOT change the original object", () => {
    const inputObj = { a: 1, b: { c: 2 } };
    const path = "x.z";
    const value = 100;

    const result = setByPath(inputObj, path, value);
    expect(inputObj).toMatchObject({ a: 1, b: { c: 2 } });
  });

  it("Should add new property keys in a object", () => {
    const inputObj = { a: 1, b: { c: 2 } };
    const path = "x";
    const value = 100;
    const result = setByPath(inputObj, path, value);
    expect(result).toMatchObject({ a: 1, b: { c: 2 }, x: 100 });
  });

  it("Should add nested  keys in a object", () => {
    const inputObj = { a: 1, b: { c: 2 } };
    const path = "x.z";
    const value = 100;
    const result = setByPath(inputObj, path, value);
    expect(result).toMatchObject({ a: 1, b: { c: 2 }, x: { z: 100 } });
  });

  it("Should add items in an array, given a number key", () => {
    const inputObj = { x: 100 };
    const path = "z.0";
    const value = 50;
    const result = setByPath(inputObj, path, value);
    expect(result).toMatchObject({ x: 100, z: [50] });
  });

});
