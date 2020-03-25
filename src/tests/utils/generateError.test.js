import { generateError } from 'utils'

test('Generate a successful error', () => {
  expect(generateError('Error title', 'Error description')).toEqual({
    status: 'error',
    error: 'Error title',
    description: 'Error description'
  })
})
