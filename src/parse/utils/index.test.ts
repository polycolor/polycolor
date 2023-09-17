// TODO: continue here when developing @metacolor!!!

// import {
//   darken as _darken,
//   lighten as _lighten,
//   saturate as _saturate,
//   desaturate as _desaturate
// } from 'polished'

import {
  type TColorTuple,
  convertHexToHSL,
  convertToRGB,
  darken,
  lighten,
  saturate,
  desaturate
  // getRGBHexFromTuple
} from '.'

test('darken', () => {
  const hex = 0xFFCD64
  const dark = 0.2

  const tuple: TColorTuple = [0, 0, 0]

  convertHexToHSL(hex, tuple)
  // console.log(tuple)

  darken(tuple, dark)
  // console.log(tuple)

  convertToRGB(tuple)
  // console.log(tuple)

  // console.log('polished:', _darken(dark, '#' + hex.toString(16)))
  // console.log('metacolor:', getRGBHexFromTuple(tuple))
})

test('lighten', () => {
  const hex = 0xFFCD64
  const dark = 0.2

  const tuple: TColorTuple = [0, 0, 0]

  convertHexToHSL(hex, tuple)
  // console.log(tuple)

  lighten(tuple, dark)
  // console.log(tuple)

  convertToRGB(tuple)
  // console.log(tuple)

  // console.log('polished:', _lighten(dark, '#' + hex.toString(16)))
  // console.log('metacolor:', getRGBHexFromTuple(tuple))
})

test('saturate', () => {
  const hex = 0xFFCD64
  const amount = 0.2

  const tuple: TColorTuple = [0, 0, 0]

  convertHexToHSL(hex, tuple)
  // console.log(tuple)

  saturate(tuple, amount)
  // console.log(tuple)

  convertToRGB(tuple)
  // console.log(tuple)

  // console.log('polished:', _saturate(amount, '#' + hex.toString(16)))
  // console.log('metacolor:', getRGBHexFromTuple(tuple))
})

test('desaturate', () => {
  const hex = 0xFFCD64
  const amount = 0.2

  const tuple: TColorTuple = [0, 0, 0]

  convertHexToHSL(hex, tuple)
  // console.log(tuple)

  desaturate(tuple, amount)
  // console.log(tuple)

  convertToRGB(tuple)
  // console.log(tuple)

  // console.log('polished:', _desaturate(amount, '#' + hex.toString(16)))
  // console.log('metacolor:', getRGBHexFromTuple(tuple))
})
