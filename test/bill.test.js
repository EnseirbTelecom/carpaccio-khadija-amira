const bill = require('../src/server_modules/bill')

test('Empty arrays', () => {
  expect(bill.getTotal([], [])).toEqual({
    error: 'Prices and quantities should have the same length'
  })
})

test('Arrays with different lengths', () => {
  expect(bill.getTotal([1, 0], [1])).toEqual({
    error: 'Prices and quantities should have the same length'
  })
})

test('Prices with negative values', () => {
  expect(bill.getTotal([-1, 0], [1, 1])).toEqual({
    error: 'Values should be >= 0'
  })
})

test('Total', () => {
  expect(bill.getTotal([1, 2], [2, 3])).toEqual({
    total: 8
  })
})

test('No country code', () => {
  expect(bill.getTotalUsingTVA([1, 2], [2, 3])).toEqual({
    error: 'The country code is mandatory'
  })
})

test('Wrong country code', () => {
  expect(bill.getTotalUsingTVA([1, 2], [2, 3], 'MA')).toEqual({
    error: 'Please enter a valid country code'
  })
})

test('Total with TVA', () => {
  expect(bill.getTotalUsingTVA([1, 2], [2, 3], 'DE')).toEqual({
    total: 9.6
  })
})

test('No discount', () => {
  expect(bill.getTotalUsingTVA([1, 2], [2, 3], 'DE', 'NO_DISCOUNT')).toEqual({
    total: 9.6
  })
})

test('No discount', () => {
  expect(bill.getTotalUsingTVA([1, 2], [2, 3], 'DE', 'PROGRESSIVE_DISCOUNT')).toEqual({
    total: 9.6
  })
})

test('Progressive discount >= 1000', () => {
  expect(bill.getTotalUsingTVA([100, 5], [6, 100], 'DE', 'Progressive_discount')).toEqual({
    total: 1280.4
  })
})

test('Progressive discount >= 5000', () => {
  expect(bill.getTotalUsingTVA([500, 5], [6, 500], 'DE', 'Progressive_discount')).toEqual({
    total: 6270
  })
})

test('Progressive discount >= 7000', () => {
  expect(bill.getTotalUsingTVA([500, 7], [7, 500], 'DE', 'Progressive_discount')).toEqual({
    total: 7812
  })
})

test('Progressive discount >= 10000', () => {
  expect(bill.getTotalUsingTVA([500, 10], [10, 500], 'DE', 'Progressive_discount')).toEqual({
    total: 10800
  })
})

test('Progressive discount >= 50000', () => {
  expect(bill.getTotalUsingTVA([500, 50], [50, 500], 'DE', 'Progressive_discount')).toEqual({
    total: 51000
  })
})

test('Flat discount', () => {
  expect(bill.getTotalUsingTVA([500, 50], [50, 500], 'DE', 'FLAT_DISCOUNT')).toEqual({
    total: 42000
  })
})

test('Fixed discount', () => {
  expect(bill.getTotalUsingTVA([5, 4], [15, 10], 'DE', 'FIXED_DISCOUNT')).toEqual({
    total: 128
  })
})

test('Fixed discount', () => {
  expect(bill.getTotalUsingTVA([40, 4], [15, 10], 'DE', 'FIXED_DISCOUNT')).toEqual({
    total: 718
  })
})

test('Fixed discount', () => {
  expect(bill.getTotalUsingTVA([40, 40], [15, 10], 'DE', 'FIXED_DISCOUNT')).toEqual({
    total: 1000
  })
})

test('No discount', () => {
  expect(bill.getTotalUsingTVA([1, 2], [2, 3], 'DE', 'FIXED_DISCOUNT')).toEqual({
    total: 9.6
  })
})

test('Incorrect discount', () => {
  expect(bill.getTotalUsingTVA([1, 2], [2, 3], 'DE', 'skfhq')).toEqual({
    error: 'Please enter a correct discount code'
  })
})
