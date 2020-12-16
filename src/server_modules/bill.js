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

const TVA = {
  "DE": "20",
  "UK": "21",
  "FR": "20",
  "IT": "25",
  "ES": "19",
  "PL": "21",
  "RO": "20",
  "NL": "20",
  "BE": "19",
  "EL": "23",
  "CZ": "27",
  "PT": "23",
  "HU": "27",
  "SE": "23",
  "AT": "22",
  "BG": "21",
  "DK": "21",
  "FI": "17",
  "SK": "18",
  "IE": "21",
  "HR": "23",
  "LT": "23",
  "SI": "24",
  "LV": "20",
  "EE": "22",
  "CY": "21",
  "LU": "25",
  "MT": "20",
};

let verifyTVA = function (country) {
  // if (country === undefined) {
  //   return 0;
  // } else {

  // }
  let keys = Object.values(TVA);
  // console.log(keys.hasOwnProperty("DE"));
  console.log(TVA.hasOwnProperty("DE"));
  if (TVA.hasOwnProperty(country)) {
    return TVA[country];
  } else {
    return -1;
  }
  // } else {
  //   let idx = 0;
  //   TVA.some(countries => {
  //     idx++;
  //     if (countries.hasOwnProperty(country)) {
  //       console.log("TVA_VERIFY " + countries[country]);
  //       return countries[country]
  //     }
  //   })
  //   if (idx === TVA.length) {
  //     return -1;
  //   }
  // }
};

let getTotal = (prices, quantities) => {
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

module.exports = {
  getTotal,
  getTotalUsingTVA: (prices, quantities, country) => {
    // Verify that the country exists in the table
    if (country === undefined) {
      return {
        error: 'The country code is mandatory'
      }
    }
    else if (verifyTVA(country) === -1) {
      return {
        error: 'Please enter a valid country code'
      }
    } else {
      // Get the Total
      let totalWithoutTVA = getTotal(prices, quantities);
      let totalWithTVA = totalWithoutTVA.total + totalWithoutTVA.total * parseInt(verifyTVA(country)) / 100;
      return {
        total: totalWithTVA
      }
    }
  }
}
