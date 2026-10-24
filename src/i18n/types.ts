import type { it } from './it';
export type Locale = 'it-IT' | 'en-GB';
type Translate<T> = T extends string ? string : { readonly [K in keyof T]: Translate<T[K]> };
export type Dictionary = Translate<typeof it>;
