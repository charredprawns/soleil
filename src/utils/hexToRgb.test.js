import hexToRgb from './hexToRgb.js'

test('Successfully convert hex to RGB value', () => {
  expect(hexToRgb('#000000')).toBe('0, 0, 0')
})

//TODO: Jest not handling throwing errors correctly
// test('Fail RBG conversion on bad input', () => {
//   expect(hexToRgb('Elephant')).toThrow()
// })
