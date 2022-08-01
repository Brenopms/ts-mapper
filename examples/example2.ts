import { Mapper } from "../lib/interfaces/mapper";
import { mapper } from "../lib/mapper";

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

const input2: Input2 = {
  prop1: {
    prop2: "append",
    prop3: "text",
  },
  prop4: [1, 2, 3, 4, 5],
  prop5: "2022-07-29T13:59:36.997Z",
};

const mapper2: Mapper<Input2, Output2> = [
  {
    dstPath: "out1",
    defaultValue: "",
    transform(input: Input2) {
      return input.prop1.prop2 + "" + input.prop1.prop3;
    },
  },
  {
    dstPath: "out2",
    defaultValue: "",
    transform(input: Input2) {
      return input.prop4.reduce((prev, curr) => prev + curr);
    },
  },
  {
    dstPath: "out3",
    defaultValue: "",
    transform(input: Input2) {
      return new Date(input.prop5);
    },
  },
  {
    dstPath: "out4.out5",
    srcPath: "prop6",
    defaultValue: "out5 default value",
  },
];

const output = mapper(input2, mapper2);
console.log("OUTPUT:");
console.log(output);
