import { it, describe, expect } from "vitest"
import { Mapper } from "../lib/interfaces/mapper.interface"
import { mapper } from "../lib/mapper/mapper"
import { Getter } from "../lib/utils/getByPath"

describe("Testing the complete functionality of mapper function", () => {
  it("Should be able to map flat objects", () => {
    const input = { a: 1, b: 2 }
    const map: Mapper<any, any> = [
      { srcPath: "a", dstPath: "x", defaultValue: 100 },
      { srcPath: "b", dstPath: "y", defaultValue: 200 },
    ]

    const result = mapper(input, map)
    expect(result).toMatchObject({ x: 1, y: 2 })
  })

  it("Should be able to map deep objects", () => {
    const input = {
      a: {
        b: {
          c: "Test string"
        }
      },
      d: [1, 2, 3]
    }

    const map: Mapper<any, any> = [
      { srcPath: "a.b.c", dstPath: "x.z", defaultValue: "String" },
      { srcPath: "d.1", dstPath: "y.0", defaultValue: [100] },
    ]

    const result = mapper(input, map)
    const expectedResult = {
      x: {
        z: "Test string"
      },
      y: [2]
    }

    expect(result).toMatchObject(expectedResult)
  })

  it("Should be able to use map's transform function", () => {
    const input = { a: "test ", b: "append", c: "2022-08-02T20:27:23.112Z", d: [1, 2, 3, 4, 5] }
    const map: Mapper<any, any> = [
      {
        dstPath: "x",
        defaultValue: undefined,
        transform(getter) {
          return getter("a") + getter("b")
        }
      },
      {
        dstPath: "y",
        defaultValue: undefined,
        transform(getter) {
          return new Date(getter("c")).toDateString()
        }
      },
      {
        dstPath: "z",
        defaultValue: undefined,
        transform(getter: Getter<any, number[]>) {
          return getter("d").reduce((curr, prev) => curr + prev)
        }
      }
    ]

    const result = mapper(input, map)

    const expectedResult = {
      x: "test append",
      y: "Tue Aug 02 2022",
      z: 15
    }

    expect(result).toMatchObject(expectedResult)
  })

  it("Should fallback to default value if srcPath does not exist or is not valid", () => {

    const input = { a: 1, b: 2 }
    const map: Mapper<any, any> = [
      { srcPath: "j", dstPath: "x", defaultValue: 100 },
      { srcPath: null, dstPath: "y", defaultValue: 200 },
    ]

    const result = mapper(input, map)
    expect(result).toMatchObject({ x: 100, y: 200 })
  })
})
