const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const rotas = require("./routers/router.js" );


app.use(bodyParser.json());

app.use("/eventos", rotas);

app.listen(8000);

module.exports = app