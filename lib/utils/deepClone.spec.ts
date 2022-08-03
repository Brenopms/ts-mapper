import { describe, it, expect } from "vitest";
import { deepClone } from "./deepClone";

describe("Test deepclone function", () => {
  it("Should clone a given object", () => {
    const inputObj = { a: 1, b: 2, c: [1, 2, 3] };
    const result = deepClone(inputObj);
    expect(result).toMatchObject(inputObj);
  });

  it("Should make a deep clone from input object", () => {
    const inputObj = { a: 1, b: { c: 2 } };
    const result = deepClone(inputObj);

    expect(result).toMatchObject(inputObj);

    //Changing result value to make sure that its not a shallow copy
    result.b.c = 200;
    expect(result.b.c).toBe(200);
    expect(inputObj.b.c).toBe(2);
  });
});
