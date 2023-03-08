const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

app.use(bodyParser.json());//  middleware permite analizxar la solicitud en un fomato Json

app.use(bodyParser.urlencoded({ extended: true }));// middleware permite analizxar la solicitud en un fomato codificado url

app.get("/", (req, res) => {
    res.json({ message: "connection with express" });
  });// ruta de prueba

app.use(express.json());
const port = process.env.port || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));
