import { isObject } from './isObject'
import { describe, it, expect } from 'vitest'

describe("Testing isObject function", () => {
  it("Should return true if the value passed is an object", () => {
    expect(isObject({})).toBe(true)
  })

  it("Should return false if the value passed is an array", () => {
    expect(isObject([1, 2])).toBe(false)
  })

  it("Should return false if the value passed is a number or string", () => {
    expect(isObject(10)).toBe(false)
    expect(isObject('string')).toBe(false)
  })
})
