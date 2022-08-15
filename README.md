# Ts Mapper

![Deploy](https://github.com/Brenopms/ts-mapper/workflows/publish/badge.svg)
![Test](https://github.com/Brenopms/ts-mapper/workflows/publish/badge.svg)
[![npm version](https://img.shields.io/npm/v/ts-obj-mapper)](https://www.npmjs.com/package/ts-obj-mapper 'View this project on npm')
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

Typescript object mapper with first class typing support.

- Convenient input and output typings for mapper
- Allows default values, transformation and direct mapping
- All methods are pure and will not modify the original object
- Very lightweight, with support to node and esm modules

## Installation

`npm install ts-obj-mapper`

or

`yarn add ts-obj-mapper`

## Usage

### Mapping

To define the rules for mapping one object to another, we have a structure called _Mapping_.

The mapping is the definition of what actions and values should be assigned to the output object. We can see its schema here:

```typescript
interface MappingValue<T extends object, O extends object> {
  /**
   * Fallback value. If the src path is invalid and no transform function is passed,
   * the return value will be the default
   */
  defaultValue: unknown;
  /**
   * Object path from the source object to be accessed
   */
  srcPath?: Paths<T, MAX_OBJECT_DEPTH>;
  /**
   * Object path to be saved in the destiny object
   */
  dstPath: Paths<O, MAX_OBJECT_DEPTH>;
  /**
   * Optional function to transform one or multiple values from source object
   * to the destiny object
   * @param getter Curried function to access safely any value from the source object
   */
  transform?(getter: Getter<T, any>): any;
```

And an example of usage:

```typescript
interface Input1 {
  prop1: number;
  prop2: number;
  prop3: string;
}

interface Output1 {
  prop10: number;
  prop20: number;
  prop30: string;
}

const mapping: Mapping<Input1, Output1> = [
  {
    srcPath: "prop1",
    dstPath: "prop10",
    defaultValue: "test",
  },
  {
    srcPath: "prop2",
    dstPath: "prop20",
    defaultValue: "test2",
  },
  {
    dstPath: "prop30",
    defaultValue: "test3",
    transform(getter) {
      return getter('prop1', 'string') + "AppendTest";
    },
  },
];
```

### Getter

For the transform function, the first argument will be a getter function that allows the retrieval of any value inside the input object, given the path of the key to be accessed.

It's possible to add types to the origin object and to the value accessed:

```typescript
{
  dstPath: "prop30",
  defaultValue: "test3",
  transform(getter: Getter<Input1, string>) {
    return getter('prop1', 'string') + "AppendTest";
  }
}
```

### Mapper

Once you have defined the _Mapping_ rules, you can call the _mapper_ function to execute the transformation

```typescript
// Output will be typed as Output1

// Explicit typing
const output = mapper<Input1, Output1>(input, mapping);


// Implicit typing (works exactly the same)
const output = mapper(input, mapping);
```
