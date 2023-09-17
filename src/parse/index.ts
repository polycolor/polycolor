import type { CSSColorValueType } from '../utils/types/CSSColorValueType'

const cssColorValueMap: Record<CSSColorValueType, string> = {
  aliceblue: '#f0f8ff',
  antiquewhite: '#faebd7',
  aqua: '#00ffff',
  aquamarine: '#7fffd4',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  bisque: '#ffe4c4',
  black: '#000000',
  blanchedalmond: '#ffebcd',
  blue: '#0000ff',
  blueviolet: '#8a2be2',
  brown: '#a52a2a',
  burlywood: '#deb887',
  cadetblue: '#5f9ea0',
  chartreuse: '#7fff00',
  chocolate: '#d2691e',
  coral: '#ff7f50',
  cornflowerblue: '#6495ed',
  cornsilk: '#fff8dc',
  crimson: '#dc143c',
  cyan: '#00ffff',
  darkblue: '#00008b',
  darkcyan: '#008b8b',
  darkgoldenrod: '#b8860b',
  darkgray: '#a9a9a9',
  darkgreen: '#006400',
  darkgrey: '#a9a9a9',
  darkkhaki: '#bdb76b',
  darkmagenta: '#8b008b',
  darkolivegreen: '#556b2f',
  darkorange: '#ff8c00',
  darkorchid: '#9932cc',
  darkred: '#8b0000',
  darksalmon: '#e9967a',
  darkseagreen: '#8fbc8f',
  darkslateblue: '#483d8b',
  darkslategray: '#2f4f4f',
  darkslategrey: '#2f4f4f',
  darkturquoise: '#00ced1',
  darkviolet: '#9400d3',
  deeppink: '#ff1493',
  deepskyblue: '#00bfff',
  dimgray: '#696969',
  dimgrey: '#696969',
  dodgerblue: '#1e90ff',
  firebrick: '#b22222',
  floralwhite: '#fffaf0',
  forestgreen: '#228b22',
  fuchsia: '#ff00ff',
  gainsboro: '#dcdcdc',
  ghostwhite: '#f8f8ff',
  goldenrod: '#daa520',
  gold: '#ffd700',
  gray: '#808080',
  green: '#008000',
  greenyellow: '#adff2f',
  grey: '#808080',
  honeydew: '#f0fff0',
  hotpink: '#ff69b4',
  indianred: '#cd5c5c',
  indigo: '#4b0082',
  ivory: '#fffff0',
  khaki: '#f0e68c',
  lavenderblush: '#fff0f5',
  lavender: '#e6e6fa',
  lawngreen: '#7cfc00',
  lemonchiffon: '#fffacd',
  lightblue: '#add8e6',
  lightcoral: '#f08080',
  lightcyan: '#e0ffff',
  lightgoldenrodyellow: '#fafad2',
  lightgray: '#d3d3d3',
  lightgreen: '#90ee90',
  lightgrey: '#d3d3d3',
  lightpink: '#ffb6c1',
  lightsalmon: '#ffa07a',
  lightseagreen: '#20b2aa',
  lightskyblue: '#87cefa',
  lightslategray: '#778899',
  lightslategrey: '#778899',
  lightsteelblue: '#b0c4de',
  lightyellow: '#ffffe0',
  lime: '#00ff00',
  limegreen: '#32cd32',
  linen: '#faf0e6',
  magenta: '#ff00ff',
  maroon: '#800000',
  mediumaquamarine: '#66cdaa',
  mediumblue: '#0000cd',
  mediumorchid: '#ba55d3',
  mediumpurple: '#9370db',
  mediumseagreen: '#3cb371',
  mediumslateblue: '#7b68ee',
  mediumspringgreen: '#00fa9a',
  mediumturquoise: '#48d1cc',
  mediumvioletred: '#c71585',
  midnightblue: '#191970',
  mintcream: '#f5fffa',
  mistyrose: '#ffe4e1',
  moccasin: '#ffe4b5',
  navajowhite: '#ffdead',
  navy: '#000080',
  oldlace: '#fdf5e6',
  olive: '#808000',
  olivedrab: '#6b8e23',
  orange: '#ffa500',
  orangered: '#ff4500',
  orchid: '#da70d6',
  palegoldenrod: '#eee8aa',
  palegreen: '#98fb98',
  paleturquoise: '#afeeee',
  palevioletred: '#db7093',
  papayawhip: '#ffefd5',
  peachpuff: '#ffdab9',
  peru: '#cd853f',
  pink: '#ffc0cb',
  plum: '#dda0dd',
  powderblue: '#b0e0e6',
  purple: '#800080',
  rebeccapurple: '#663399',
  red: '#ff0000',
  rosybrown: '#bc8f8f',
  royalblue: '#4169e1',
  saddlebrown: '#8b4513',
  salmon: '#fa8072',
  sandybrown: '#f4a460',
  seagreen: '#2e8b57',
  seashell: '#fff5ee',
  sienna: '#a0522d',
  silver: '#c0c0c0',
  skyblue: '#87ceeb',
  slateblue: '#6a5acd',
  slategray: '#708090',
  slategrey: '#708090',
  snow: '#fffafa',
  springgreen: '#00ff7f',
  steelblue: '#4682b4',
  tan: '#d2b48c',
  teal: '#008080',
  thistle: '#d8bfd8',
  tomato: '#ff6347',
  turquoise: '#40e0d0',
  violet: '#ee82ee',
  wheat: '#f5deb3',
  white: '#ffffff',
  whitesmoke: '#f5f5f5',
  yellow: '#ffff00',
  yellowgreen: '#9acd32'
}

interface TAdjustColor {
  alpha?: number
  darken?: number
  lighten?: number
}

interface TParseFunction {
  (): undefined | string

  (color: number | string): undefined | string
  (color: CSSColorValueType): undefined | string

  (color: number | string, alpha: number): undefined | string
  (color: CSSColorValueType, alpha: number): undefined | string

  (color: number | string, adjust: TAdjustColor): undefined | string
  (color: CSSColorValueType, adjust: TAdjustColor): undefined | string

  (color: number | string, alpha: number, adjust: TAdjustColor): undefined | string
  (color: CSSColorValueType, alpha: number, adjust: TAdjustColor): undefined | string
}

const parseAlpha = (value: number): number => {
  if (value < 0) {
    return 0
  }

  if (value > 1) {
    return 1
  }

  return value
}

type ColorTupleType = [number, number, number]

// const convertRgbTupleFromHex = (tuple: ColorTupleType, color: number): void => {
//   const red = color >> 16
//   const green = color >> 8 & 0xFF
//   const blue = color & 0xFF

//   // return [red, green, blue]

//   tuple[0] = red
//   tuple[1] = green
//   tuple[2] = blue
// }

const convertToHslTupleFromHex = (tuple: ColorTupleType, hex: number): void => {
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

const darken = (tuple: ColorTupleType, value: number): void => {
  let l = tuple[2]

  l -= value

  if (l < 0) {
    l = 0
  } else if (l > 1) {
    l = 1
  }

  tuple[2] = l
}

const convertToRgbTupleFromHslTuple = (tuple: ColorTupleType): void => {
  let r: number
  let g: number
  let b: number

  const h: number = tuple[0]
  const s: number = tuple[1]
  const l: number = tuple[2]

  const hue2rgb = (p: number, q: number, t: number): number => {
    if (t < 0) t += 1
    if (t > 1) t -= 1
    if (t < 1 / 6) return p + (q - p) * 6 * t
    if (t < 1 / 2) return q
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
    return p
  }

  if (s === 0) {
    r = g = b = l // achromatic
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s
    const p = 2 * l - q
    r = hue2rgb(p, q, h + 1 / 3)
    g = hue2rgb(p, q, h)
    b = hue2rgb(p, q, h - 1 / 3)
  }

  // console.log({ r: r * 255, g: g * 255, b: b * 255 })
  tuple[0] = Math.round(r * 255)
  tuple[1] = Math.round(g * 255)
  tuple[2] = Math.round(b * 255)
}

const parse: TParseFunction = (param1?: any, param2?: any) => {
  if (typeof param1 === 'number') {
    if (param1 >= 0 && param1 <= 0xFFFFFF) {
      if (typeof param2 === 'number') {
        const red = param1 >> 16
        const green = param1 >> 8 & 0xFF
        const blue = param1 & 0xFF

        return 'rgba(' + red + ',' + green + ',' + blue + ',' + parseAlpha(param2) + ')'
      }

      if (typeof param2 === 'object') {
        const tuple: ColorTupleType = [0, 0, 0]

        convertToHslTupleFromHex(tuple, param1)

        if ('darken' in param2) {
          darken(tuple, param2.darken)
        }

        // console.log(tuple)

        convertToRgbTupleFromHslTuple(tuple)

        // console.log(tuple)

        return '#' +
          (
            tuple[0].toString(16) +
            tuple[1].toString(16) +
            tuple[2].toString(16)
          ).padStart(6, '0')
      }

      return '#' + param1.toString(16).padStart(6, '0')
    }
  } else if (typeof param1 === 'string' && param1.length > 0) {
    if (typeof param2 === 'number') {
      let color: string = param1

      if (param1 in cssColorValueMap) {
        color = cssColorValueMap[param1 as CSSColorValueType]
      }

      const red = parseInt(color.substring(1, 3), 16)
      const green = parseInt(color.substring(3, 5), 16)
      const blue = parseInt(color.substring(5, 7), 16)

      return 'rgba(' + red + ',' + green + ',' + blue + ',' + parseAlpha(param2) + ')'
    }

    if (param1 in cssColorValueMap) {
      return cssColorValueMap[param1 as CSSColorValueType]
    }

    return param1
  }

  return undefined
}

export default parse
