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
