const db = require("../models");

const Product = db.product;
const User = db.user;

exports.shopping= async (req,res)=>{



    
    res.status(200).send({ message: "test" });
}

exports.addcart = async (req, res) => {
    const {  email , titulo , values } =req.body
    console.log(req.body)
    try {
        let product= await Product.findAll({  where:{titulo:titulo}})
        let user= await User.findAll({where:{email:email}})
        let cart = user[0].cart
        const filteredproduct = product.map(e => ({titulo: e.titulo, existencias: e.existencias}));
        if(filteredproduct[0].existencias<values)
        {res.send({message:"error"})}
        else{
            let newobject={
                name:filteredproduct[0].titulo,
                cantidad:values
            }
            cart.push(newobject)
          
           let add= await User.update({cart:cart}, { where: { email: email } } )
           res.send({add})
        }
    } catch (error) {
        res.status(400).send(error)
    }
  };