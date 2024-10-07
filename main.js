const express = require("express");
const app = express();
const cors = require('cors')
const bodyParser = require("body-parser");
const rotas = require("./routers/router.js" );

app.use(cors())
//instalar o cors 
//npm i cors
app.use(bodyParser.json());

app.use("/eventos", rotas);

app.listen(8000);

module.exports = app