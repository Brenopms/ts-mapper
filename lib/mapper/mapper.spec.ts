import {
  describe,
  it,
  expect,
  vi,
  beforeEach,
  SpyInstance,
  afterEach,
} from "vitest";
import * as mapperApplyMd from "./mapperApply";
import * as setByPathMd from "../utils/setByPath";
import { Mapper } from "../interfaces/mapper.interface";
import { mapper } from "./mapper";


describe("Testing mapper function", () => {
  let setByPathSpy: SpyInstance;
  let mapperApplySpy: SpyInstance;

  beforeEach(() => {
    setByPathSpy = vi.spyOn(setByPathMd, "setByPath");
    mapperApplySpy = vi.spyOn(mapperApplyMd, "mapperApply");
  });

  afterEach(() => {
    setByPathSpy.mockClear();
    mapperApplySpy.mockClear();
  });

  it("Should invoke mapperApply for each item in Mapper", () => {
    setByPathSpy.mockReturnValue({})
    mapperApplySpy.mockReturnValue({})

    const map: Mapper<any, any> = [
      {
        srcPath: "a",
        dstPath: "x",
        defaultValue: undefined,
      },
      {
        srcPath: "b",
        dstPath: "y",
        defaultValue: undefined,
      },
    ];

    const inputObj = { a: 1, b: 2 };

    const result = mapper(inputObj, map)
    expect(mapperApplySpy).toHaveBeenCalledTimes(2)
  });
});
