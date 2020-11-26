// App Express
let express = require('express');
let bodyParser = require("body-parser");
let app = express();
let functions = require('./functions/functions');

app.get("/id", functions.getId);

app.post("/bill", (req, res) => {
    let prices = req.body.prices;
    let quantities = req.body.quantities;
    if (prices.length === 0 || quantities.length === 0 || prices.length !== quantities.length) {
        res.json({
            "error": "error"
        })
    } else {
        let total = 0;
        prices.forEach((price, index) => {
            if (price < 0) {
                res.json({
                    "error": "prices should be > 0"
                });
            } else {
                total += price * quantities[index];
            }
        });
        res.status(200).json({
            "total": total
        })
    }
})

module.exports = app;