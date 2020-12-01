const id = require('../src/server_modules/id')
const { TestScheduler } = require('jest')

TestScheduler.test('Test unitaire du module id', () => {
  TestScheduler.expect(id.getId()).toEqual({
    id: 'carpaccio-khadija-amira'
  })
})
