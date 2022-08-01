import { expect, it, describe } from 'vitest'
import { getByPath } from './getByPath'

describe('Test getByPath function', () => {
  it("Should return the correct value given an existing key", () => {
    const obj = { a: 1, b: 2 }
    const path = 'a'
    const result = getByPath(obj, path)
    expect(result).toBe(1)
  })

  it("Should return the correct nested value given an existing key", () => {
    const obj = { a: 1, b: { c: { d: 10 } } }
    const path = 'b.c.d'
    const result = getByPath(obj, path)
    expect(result).toBe(10)
  })

  it("Should return the correct value inside an array, given a passed index", () => {
    const obj = { a: 1, b: { c: [1, 2, 3, 4, 5] } }
    const path = 'b.c.2'
    const result = getByPath(obj, path)
    expect(result).toBe(3)
  })

  it("Should return the default value if the key doesnt exist inside object", () => {
    const obj = { a: 1, b: { c: [1, 2, 3, 4, 5] } }
    const path = 'b.c.x'
    const defaultValue = 20
    const result = getByPath(obj, path as any, defaultValue)
    expect(result).toBe(defaultValue)
  })
})
