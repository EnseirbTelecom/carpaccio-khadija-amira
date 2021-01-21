const request = require('supertest') // supertest is a framework that allows to easily test web apis
const app = require('../src/api')

test('GET /id', async () => {
  const { body } = await request(app).get('/id') // uses the request function that calls on express app instance
  expect(body).toEqual({
    id: 'carpaccio-khadija-amira'
  })
})

test('POST /bill', async () => {
  const { body } = await request(app).post('/bill').send({
    prices: [1, 2],
    quantities: [2, 3],
    country: 'DE'
  })
  // uses the request function that calls on express app instance
  expect(body).toEqual({
    total: 9.6
  })
})

test('POST /bill with currency code', async () => {
  const { body } = await request(app).post('/bill').send({
    prices: [1, 2],
    quantities: [2, 3],
    country: 'DE',
    currency: 'CAD'
  })
  // uses the request function that calls on express app instance
  expect(body).toEqual({
    total: '14.76'
  })
})

test('POST /bill with an incorrect currency code', async () => {
  const { body } = await request(app).post('/bill').send({
    prices: [1, 2],
    quantities: [2, 3],
    country: 'DE',
    currency: 'test'
  })
  // uses the request function that calls on express app instance
  expect(body).toEqual({
    error: 'Please enter a valid currency'
  })
})
