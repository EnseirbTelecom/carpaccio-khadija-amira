// App Express
let express = require('express');
let bodyParser = require("body-parser");
let app = express();

app.get("/id", (req, res) => {
    res.status(200).json({
        "id": "carpaccio-khadija-amira"
    });
});

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
app.listen(3002, () => { console.log("Waiting for requests...."); })