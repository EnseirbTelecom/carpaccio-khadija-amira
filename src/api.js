// App Express
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const id = require('./server_modules/id')
const bill = require('./server_modules/bill')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/id', (req, res) => {
  res.status(200).json(id.getId())
})

app.post('/bill', function (req, res) {
  const prices = req.body.prices
  const quantities = req.body.quantities
  const country = req.body.country
  res.json(bill.getTotalUsingTVA(prices, quantities, country))
})

module.exports = app
