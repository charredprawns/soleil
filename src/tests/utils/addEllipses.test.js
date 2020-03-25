import { addEllipses } from 'utils'

test('adds ellipses to end of string', () => {
  expect(
    addEllipses('This is a string that contains more than 10 characters', 10)
  ).toBe('This is a ...')
})

test('This will not be replaced with ellipses', () => {
  expect(addEllipses('This will not be replaced with ellipses', 105)).toBe(
    'This will not be replaced with ellipses'
  )
})
