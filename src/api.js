// App Express
let express = require('express');
let bodyParser = require("body-parser");
let app = express();
let id = require('./server_modules/id');
let bill = require('./server_modules/bill');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.get("/id", (req, res) => {
    res.status(200).json(id.getId())
});

app.post("/bill", function (req, res) {
    let prices = req.body.prices;
    let quantities = req.body.quantities;
    res.json(bill.getTotal(prices, quantities))
})

module.exports = app;