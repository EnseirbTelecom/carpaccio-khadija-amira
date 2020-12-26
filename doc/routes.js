/**
 * @route GET /id
 * @group id 
 * 
 * @returns {Id.model} 200 
 * 
 * @produces application/json
 * @consumes application/json
 */

 /**
 * @route POST /id
 * @group bill
 * @param {Array} prices.body.required - prices' array
 * @param {Array} quantities.body.required - quantities' array
 * @param {string} country.body.required - country code
 * @param {string} discount.body - discount 
 * @param {string} currency.body - currency
 * 
 * 
 * @returns {Total.model} 200 
 * @returns {Error.model} 403
 * @produces application/json
 * @consumes application/json
 */