import { MapperValue } from './mapperValue.interface';

export type Mapper<T extends {}, O extends {}> = MapperValue<T, O>[];
