import { Getter } from '../lib/interfaces/getter.interface';
import { Mapping } from "../lib/interfaces/mapping.interface";
import { mapper } from "../lib/mapper/mapper";

interface Input2 {
  prop1: {
    prop2: string;
    prop3: string;
  };
  prop4: number[];
  prop5: string;
  prop6?: string;
}

interface Output2 {
  out1: string;
  out2: number;
  out3: Date;
  out4: {
    out5: string;
  };
}

const input2 = {
  prop1: {
    prop2: "append",
    prop3: "text",
  },
  prop4: [1, 2, 3, 4, 5],
  prop5: "2022-07-29T13:59:36.997Z",
};

const mapper2: Mapping<Input2, Output2> = [
  {
    dstPath: "out1",
    defaultValue: "",
    transform(getter) {
      return getter('prop1.prop2') + "" + getter('prop1.prop3');
    },
  },
  {
    dstPath: "out2",
    defaultValue: "",
    transform(getter: Getter<Input2, string[]>) {
      return getter('prop4').reduce((prev, curr) => prev + curr);
    },
  },
  {
    dstPath: "out3",
    defaultValue: "",
    transform(getter: Getter<Input2, string>) {
      return new Date(getter('prop5'));
    },
  },
  {
    dstPath: "out4.out5",
    srcPath: "prop6",
    defaultValue: "out5 default value",
  },
];

const output = mapper(input2, mapper2);
console.log(output);
