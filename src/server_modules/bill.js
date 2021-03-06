const tva = require('./TVA')
const CalculDiscount = require('./discount')
const currencies = require('./currencies')

const verifyValues = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      return 0
    }
  }
  return 1
}

const verifyPricesQuantities = (prices, quantities) => {
  if (prices.length === 0 || quantities.length === 0 || prices.length !== quantities.length) {
    return 0
  } else {
    return 1
  }
}

const getTotal = (prices, quantities) => {
  // Verify that the two arrays have the same length
  if (!verifyPricesQuantities(prices, quantities)) {
    return {
      error: 'Prices and quantities should have the same length'
    }
  } else {
    // Verify that all values are >= 0
    if (!verifyValues(prices) || !verifyValues(quantities)) {
      return {
        error: 'Values should be >= 0'
      }
    } else {
      let total = 0
      prices.forEach((price, index) => {
        total += price * quantities[index]
      })
      return {
        total: total
      }
    }
  }
}

const getTotalUsingTVA = (prices, quantities, country, discount = '') => {
  // Verify that the country exists in the table
  if (country === undefined) {
    return {
      error: 'The country code is mandatory'
    }
  } else if (tva.verifyTVA(country) === -1) {
    return {
      error: 'Please enter a valid country code'
    }
  } else {
    // Get the Total
    const totalWithoutTVA = getTotal(prices, quantities)
    let totalWithTVA = totalWithoutTVA.total + totalWithoutTVA.total * parseInt(tva.verifyTVA(country)) / 100
    if (discount) {
      if (CalculDiscount.calculateDiscount(discount, totalWithTVA) === -1) {
        return {
          error: 'Please enter a correct discount code'
        }
      } else {
        totalWithTVA = totalWithTVA - CalculDiscount.calculateDiscount(discount, totalWithTVA)
      }
    }
    return {
      total: totalWithTVA
    }
  }
}

module.exports = {
  getTotal,
  getTotalUsingTVA,
  getTotalInDifferentCurrency: async (prices, quantities, country, discount = '', currency = '') => {
    const totalTVA = getTotalUsingTVA(prices, quantities, country, discount)
    if (currency) {
      return await currencies.getRateExchange(totalTVA.total, currency)
    } else {
      return totalTVA
    }
  }
}
