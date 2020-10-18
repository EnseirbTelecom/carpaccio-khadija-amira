// App Express
let express = require('express');
let bodyParser = require("body-parser");
let app = express();

app.get("/id", (req, res) => {
    console.log("Requête GET reçu !!!");
    return {id: "carpaccio-khadija-amira"}
});

app.listen(3000, () => {console.log("Waiting for requests....");})