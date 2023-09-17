import type { CSSColorValueType } from './CSSColorValueType'

export type ColorTupleType = [number, number, number]

export type MetaColorType =
    number
    | string
    | {
      rgb?: number | string
    }
