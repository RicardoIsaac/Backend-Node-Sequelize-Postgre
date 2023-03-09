const db = require("../models");

const Product = db.product;
const Autor = db.autor;
const Editorial = db.editorial;

exports.createProduct = async (req, res) => {
  const { codigo, titulo, precio, existencias, autors, editorials } = req.body;

 try {
   
   let associatedAutor= await Autor.findAll({  where:{name:autors}})
   let associatedEditorial= await Editorial.findAll({  where:{name:editorials}})


   if (associatedEditorial[0]===undefined) {
    console.log("no edit")
    const newEditorial= await Editorial.create({
      name:editorials
    })
   }
  if (associatedAutor[0]===undefined) {
   console.log("no aut")
  const newAutor= await Autor.create({
     name:autors
   })
 }
 let Aut= await Autor.findAll({  where:{name:autors}})
 let Edit= await Editorial.findAll({  where:{name:editorials}})

  const newProduct= await Product.create({
    codigo,
    titulo,
    precio,
    existencias,
  })

newProduct.addAutor(Aut)
newProduct.addEditorial(Edit)

res.status(200).send(newProduct)

 } catch (error) {
  res.status(400).send(error)
 }
  
};

exports.test = (req, res) => {
  res.send({ message: "test" });
};

exports.getall= async(req, res) => {
  let product= await Product.findAll({})
  const filteredproduct = product.map(book => ({titulo: book.titulo, existencias: book.existencias}));
  res.send( filteredproduct );
};