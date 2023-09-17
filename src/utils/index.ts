export type ColorTupleType = [number, number, number]

export const convertRgbTupleFromHex = (tuple: ColorTupleType, color: number): void => {
  const red = color >> 16
  const green = color >> 8 & 0xFF
  const blue = color & 0xFF

  // return [red, green, blue]

  tuple[0] = red
  tuple[1] = green
  tuple[2] = blue
}

export const convertToHslTupleFromHex = (tuple: ColorTupleType, hex: number): void => {
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
