// TODO: http://scg.ar-ch.org/

import parse from '..'

describe('adjusts', () => {
  describe('color as number adjusted with darken', () => {
    test('parse(0x123456, { darken: 0 })', () => {
      expect(parse(0x123456, { darken: 0 })).toBe('#123456')
    })

    // test('parse(0xFFCD64, { darken: .2 })', () => {
    //   expect(parse(0xFFCD64, { darken: .2 })).toBe('#fdab00')
    // })
  })
})
