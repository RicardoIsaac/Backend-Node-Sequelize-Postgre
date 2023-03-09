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


const db = require("./models")
/*
const Role=db.role
db.sequelize.sync({force:true}).then(() => {// produccion solo se usa db.sequelize.sync();
  console.log('drop and resync database');
  initial();
}); 

// posteo automatico de primeros roles
function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
  
  Role.create({
    id: 2,
    name: "moderator"
  });
  
  Role.create({
    id: 3,
    name: "admin"
  });
}
*/
db.sequelize.sync();
//
app.get("/", (req, res) => {
    res.json({ message: "connection with express" });
  });// ruta de prueba

  require('./routes/auth.routes')(app);
  require('./routes/user.routes')(app);
  require("./routes/product.routes")(app)

app.use(express.json());
const port = process.env.port || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));
