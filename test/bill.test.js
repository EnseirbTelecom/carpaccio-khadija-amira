const bill = require('../src/server_modules/bill')
const { TestScheduler } = require('jest')

TestScheduler.test('Empty arrays', () => {
  TestScheduler.expect(bill.getTotal([], [])).toEqual({
    error: 'Prices and quantities should have the same length'
  })
})

TestScheduler.test('Arrays with different lengths', () => {
  TestScheduler.expect(bill.getTotal([1, 0], [1])).toEqual({
    error: 'Prices and quantities should have the same length'
  })
})

TestScheduler.test('Prices with negative values', () => {
  TestScheduler.expect(bill.getTotal([-1, 0], [1, 1])).toEqual({
    error: 'Values should be >= 0'
  })
})

TestScheduler.test('Total', () => {
  TestScheduler.expect(bill.getTotal([1, 2], [2, 3])).toEqual({
    total: 8
  })
})
