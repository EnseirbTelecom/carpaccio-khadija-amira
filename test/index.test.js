const request = require('supertest') // supertest is a framework that allows to easily test web apis
const app = require('../src/api')
const { TestScheduler } = require('jest')

test('GET /id', async () => {
  const { body } = await request(app).get('/id') // uses the request function that calls on express app instance
  expect(body).toEqual({
    id: 'carpaccio-khadija-amira'
  })
})

test('POST /bill', async () => {
  const { body } = await request(app).post('/bill').send({
    prices: [1, 2],
    quantities: [2, 3]
  })
  // uses the request function that calls on express app instance
  expect(body).toEqual({
    error: 'The country code is mandatory'
  })
})
