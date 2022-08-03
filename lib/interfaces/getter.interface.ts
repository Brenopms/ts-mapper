import { MAX_OBJECT_DEPTH } from "../constants/maxObjectDepth";
import { Paths } from "./paths.interface";

export type Getter<T, O, S = unknown> = (
  path: Paths<T, MAX_OBJECT_DEPTH> & string,
  defaultValue?: S,
) => O;
