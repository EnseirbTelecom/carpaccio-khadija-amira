const fetch = require('node-fetch')

module.exports = {
  getRateExchange: async (total, currency) => {
    const url = 'https://api.exchangeratesapi.io/latest?symbols=' + currency
    const resultAPI = await fetch(url).then(res => res.json())
    if (!resultAPI.rates) {
      return {
        error: 'Please enter a valid currency'
      }
    } else {
      const rate = resultAPI.rates[currency]
      const totalInDifferentCurrency = total * rate
      return {
        total: totalInDifferentCurrency.toFixed(2)
      }
    }
  }
}
