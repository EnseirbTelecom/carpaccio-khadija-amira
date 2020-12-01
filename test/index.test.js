const request = require('supertest') // supertest is a framework that allows to easily test web apis
const app = require('../src/api')
const { TestScheduler } = require('jest')

TestScheduler.test('GET /id', async () => {
  const { body } = await request(app).get('/id') // uses the request function that calls on express app instance
  TestScheduler.expect(body).toEqual({
    id: 'carpaccio-khadija-amira'
  })
})

TestScheduler.test('POST /bill', async () => {
  const { body } = await request(app).post('/bill').send({
    prices: [1, 2],
    quantities: [2, 3]
  })
  // uses the request function that calls on express app instance
  TestScheduler.expect(body).toEqual({
    total: 8
  })
})
