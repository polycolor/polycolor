// TODO: alpha after string: '#000000 .5' => 'rgba(0,0,0,0.5)'

// TODO: to lower case '0xFFFFFF' => '#ffffff'
// TODO: to lower case '#FFFFFF' => '#ffffff'
// TODO: to named colors '#ffffff' => 'white'
// TODO: to named colors '#ffffff' => 'white'
// TODO: css short colors '#fff' => 'white'

// TODO: support for #RGB / #RGBA / #RRGGBBAA

// TODO: parseColor('transparent' / 'currentColor')
// TODO: preconfigurable behaviors (e.g.: convert to named colors, alternative named colors spelling, etc)

// TODO: rename to @metacolor / @extracolor / @hypercolor

// inspiration: https://colors.dopely.top/

// -----------------------------------------------------------------------------

// export { default as isColor } from './isColor'
// export { default as parseAsCSSColor } from './parseAsCSSColor'
// export type { TCSSMetaColor } from './parseAsCSSColor'

// -----------------------------------------------------------------------------

type ColorTupleType = [number, number, number]

interface AdjustOptions {
  red?: number | string
  green?: number | string
  blue?: number | string

  hue?: number | string
  saturation?: number | string
  lightness?: number | string
  value?: number | string
}

class Color {
  constructor () {

  }

  adjust (options: AdjustOptions): Color {
    return this
  }

  darken (amount: number | string): Color {
    return this
  }

  toHex (): number {
    return 0
  }

  toCSS () {}

  toRGB () {}
  toRGBA () {}

  toHSL () {}
  toHSLA () {}
}

const convertRgbTupleFromHex = (tuple: ColorTupleType, color: number): void => {
  const red = color >> 16
  const green = color >> 8 & 0xFF
  const blue = color & 0xFF

  // return [red, green, blue]

  tuple[0] = red
  tuple[1] = green
  tuple[2] = blue
}

const convertRgbTupleToHslTuple = (tuple: ColorTupleType): void => {
  // return [0, 0, 0]
}

interface ColorFunction {
  (): void
  (color: number): void
  (red: number, green: number, blue: number, alpha?: number): void
}

const color: ColorFunction = (param1?: any, param2?: any, param3?: any, param4?: any) => {
  if (typeof param1 === 'number') {
    const tuple: ColorTupleType = [-1, -1, -1]

    convertRgbTupleFromHex(tuple, param1)
    convertRgbTupleToHslTuple(tuple)

    // const rgb = convertRgbTupleFromHex(param1)
    // const hsl = convertRgbTupleToHslTuple(rgb)
  }
}

export default color
