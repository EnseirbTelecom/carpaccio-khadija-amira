const bill = require('../src/server_modules/bill')
const { TestScheduler } = require('jest')

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
  expect(bill.getTotalUsingTVA([1, 2], [2, 3], 'DE', "NO_DISCOUNT")).toEqual({
    total: 9.6
  })
})

// test('Progressive discount >= 1000', () => {
//   expect(bill.getTotalUsingTVA([100, 5], [6, 100], 'DE', "Progressive_discount")).toEqual({
//     total: 9.6
//   })
// })



