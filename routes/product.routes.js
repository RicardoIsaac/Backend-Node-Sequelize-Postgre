const controller = require("../controllers/product.controller");
const { authJwt } = require("../middleware");

module.exports = function (app) {
  app.use(function (req, res, next) {
    //envio de headear con token
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  // rutas de creacion-obtener todos los productos-dar restock
  // todos solo para administrador
  app.post(
    "api/product/create",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.createProduct
  );
  app.get(
    "/api/product/allproducts",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.getall
  );
  app.put(
    "/api/product/restock",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.restock
  );
};
