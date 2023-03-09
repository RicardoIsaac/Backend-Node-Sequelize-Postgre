const db = require("../models");

const Product = db.product;
const User = db.user;

//compra de productos
exports.shopping = async (req, res) => {
  const { email, titulo, values } = req.body;

  try {
    let user = await User.findAll({ where: { email: email } });
    const filteredCart = user[0].cart.filter((e) => e.name === titulo);
    const otheritems = user[0].cart.filter((e) => e.name !== titulo);

    let product = await Product.findAll({ where: { titulo: titulo } });
    if (product[0].existencias < values) {
      res.status(200).send({ message: "insuficent items" });
    } else {
      let cart = [...otheritems];
      let shop = filteredCart[0].cantidad - values;
      let newitem = {
        name: titulo,
        cantidad: shop,
      };
      cart.push(newitem);
      let shopUser = await User.update(
        { cart: cart },
        { where: { email: email } }
      );

      // reducir stock
      let value = product[0].existencias - values;
      // añadir a compras
      let boughter = {
        user: user[0].username,
        cantidad: values,
      };
      let compras = product[0].compras;
      compras.push(boughter);
      let notificacion = await Product.update(
        { compras: compras, existencias: value },
        { where: { titulo: titulo } }
      );
      res.status(200).send("compra realizada");
    }
  } catch (error) {
    res.status(400).send(error);
  }
};
//añadi productos al carro de compras
exports.addcart = async (req, res) => {
  const { email, titulo, values } = req.body;

  try {
    let product = await Product.findAll({ where: { titulo: titulo } });
    let user = await User.findAll({ where: { email: email } });
    let cart = user[0].cart;
    const filteredproduct = product.map((e) => ({
      titulo: e.titulo,
      existencias: e.existencias,
    }));
    if (filteredproduct[0].existencias < values) {
      res.send({ message: "error" });
    } else {
      let newobject = {
        name: filteredproduct[0].titulo,
        cantidad: values,
      };
      cart.push(newobject);

      let add = await User.update({ cart: cart }, { where: { email: email } });
      res.send({ add });
    }
  } catch (error) {
    res.status(400).send(error);
  }
};
