import { mapper } from "../lib/mapper/mapper";
import { Mapping } from "../lib/interfaces/mapping.interface";

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

const input: Input1 = {
  prop1: 100,
  prop2: 200,
  prop3: "string",
};

const mapper2: Mapping<Input1, Output1> = [
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

const output = mapper<Input1, Output1>(input, mapper2);
console.log(output);
