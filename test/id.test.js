const id = require('../src/server_modules/id')
const { TestScheduler } = require('jest')

test('Test unitaire du module id', () => {
  expect(id.getId()).toEqual({
    id: 'carpaccio-khadija-amira'
  })
})
