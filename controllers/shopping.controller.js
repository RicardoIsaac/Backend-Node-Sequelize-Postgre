const db = require("../models");

const Product = db.product;
const User = db.user;

exports.shopping= async (req,res)=>{



    
    res.status(200).send({ message: "test" });
}

exports.test = (req, res) => {
    res.send({ message: "test" });
  };