import { MappingValue } from './mappingValue.interface';

export type Mapping<T extends {}, O extends {}> = MappingValue<T, O>[];
