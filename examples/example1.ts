import { mapper } from '../lib/mapper'
import { Mapper } from '../lib/interfaces/mapper'
import { getByPath } from '../lib/utils/pathGet'

interface Input1 {
  prop1: number,
  prop2: number,
  prop3: string
}

interface Output1 {
  prop10: number,
  prop20: number,
  prop30: string
}

const input: Input1 = {
  prop1: 100,
  prop2: 200,
  prop3: 'string'
}

const mapper2: Mapper<Input1, Output1> = [
  {
    srcPath: 'prop1',
    dstPath: 'prop10',
    defaultValue: 'test'
  },
  {
    srcPath: 'prop2',
    dstPath: 'prop20',
    defaultValue: 'test2',
  },
  {
    dstPath: 'prop30',
    defaultValue: 'test3',
    transform(input: Input1) {
      return getByPath<Input1>(input, 'prop2') + 'AppendTest'
    }
  }
]

const output = mapper<Input1, Output1>(input, mapper2)
console.log(output);

