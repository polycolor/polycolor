import type { ColorTupleType } from '../types'

export const convertTupleFromHex = (tuple: ColorTupleType, hex: number): void => {
  const r = (hex >> 16) / 255
  const g = (hex >> 8 & 0xFF) / 255
  const b = (hex & 0xFF) / 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)

  let h = 0
  let s = 0
  const l = (max + min) / 2

  if (max === min) {
    h = s = 0 // achromatic
  } else {
    const d = max - min

    s = l > 0.5
      ? d / (2 - max - min)
      : d / (max + min)

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break

      case g:
        h = (b - r) / d + 2
        break

      case
        b: h = (r - g) / d + 4
        break
    }

    h /= 6
  }

  tuple[0] = h
  tuple[1] = s
  tuple[2] = l
}

export const saturate = (tuple: ColorTupleType, amount: number): void => {
  if (amount < 0) {
    amount = 0
  } else if (amount > 1) {
    amount = 1
  }

  let s = tuple[1] += amount

  if (s < 0) {
    s = 0
  } else if (s > 1) {
    s = 1
  }

  tuple[1] = s
}

export const lighten = (tuple: ColorTupleType, amount: number): void => {
  if (amount < 0) {
    amount = 0
  } else if (amount > 1) {
    amount = 1
  }

  let l = tuple[2] += amount

  if (l < 0) {
    l = 0
  } else if (l > 1) {
    l = 1
  }

  tuple[2] = l
}

export const desaturate = (tuple: ColorTupleType, amount: number): void => {
  saturate(tuple, -amount)
}

export const darken = (tuple: ColorTupleType, amount: number): void => {
  lighten(tuple, -amount)
}
