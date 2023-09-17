import {
  type ColorTupleType,
  convertRgbTupleFromHex
} from '.'

import {
  convertToHslTupleFromHex
} from '.'

xdescribe('convertRgbTupleFromHex', () => {
  test('parse 0x000000', () => {
    const tuple: ColorTupleType = [-1, -1, -1]

    convertRgbTupleFromHex(tuple, 0x000000)

    expect(tuple).toEqual([0, 0, 0])
  })

  test('parse 0xFF0000', () => {
    const tuple: ColorTupleType = [-1, -1, -1]

    convertRgbTupleFromHex(tuple, 0xFF0000)

    expect(tuple).toEqual([255, 0, 0])
  })

  test('parse 0x00FF00', () => {
    const tuple: ColorTupleType = [-1, -1, -1]

    convertRgbTupleFromHex(tuple, 0x00FF00)

    expect(tuple).toEqual([0, 255, 0])
  })

  test('parse 0x0000FF', () => {
    const tuple: ColorTupleType = [-1, -1, -1]

    convertRgbTupleFromHex(tuple, 0x0000FF)

    expect(tuple).toEqual([0, 0, 255])
  })

  test('parse 0xFFFFFF', () => {
    const tuple: ColorTupleType = [-1, -1, -1]

    convertRgbTupleFromHex(tuple, 0xFFFFFF)

    expect(tuple).toEqual([255, 255, 255])
  })
})

describe('convertToHslTupleFromHex', () => {
  test('parse 0x000000', () => {
    const tuple: ColorTupleType = [-1, -1, -1]

    convertToHslTupleFromHex(tuple, 0x000000)
    expect(tuple).toEqual([0, 0, 0])
  })

  test('parse 0xFFFFFF', () => {
    const tuple: ColorTupleType = [-1, -1, -1]

    convertToHslTupleFromHex(tuple, 0xFFFFFF)
    expect(tuple).toEqual([0, 0, 1])
  })

  test('parse 0xFF0000', () => {
    const tuple: ColorTupleType = [-1, -1, -1]

    convertToHslTupleFromHex(tuple, 0xFF0000)
    expect(tuple).toEqual([0, 1, 0.5])
  })

  test('parse 0x00FF00', () => {
    const tuple: ColorTupleType = [-1, -1, -1]

    convertToHslTupleFromHex(tuple, 0x00FF00)
    expect(tuple).toEqual([1 / 3, 1, 0.5])
  })

  test('parse 0x0000FF', () => {
    const tuple: ColorTupleType = [-1, -1, -1]

    convertToHslTupleFromHex(tuple, 0x0000FF)
    expect(tuple).toEqual([2 / 3, 1, 0.5])
  })
})
