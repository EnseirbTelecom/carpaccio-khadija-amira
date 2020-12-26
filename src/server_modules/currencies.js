const fetch = require('node-fetch');

module.exports = {
    getRateExchange: async (total, currency) => {
        let url = "https://api.exchangeratesapi.io/latest?symbols=" + currency;
        let resultAPI = await fetch(url).then(res => res.json());
        if (!resultAPI.rates) {
            return {
                error: "Please enter a valid currency"
            }
        } else {
            let rate = resultAPI.rates[currency];
            let totalInDifferentCurrency = total * rate;
            return {
                total: totalInDifferentCurrency.toFixed(2)
            }
        }
    }
}