const { authJwt } = require("../middleware");
const controller = require("../controllers/shopping.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    //envio de headear con token
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.put(
    //ruta para comprar
    "/api/test/shop",
    [authJwt.verifyToken],
    controller.shopping
  );
  app.put(
    //ruta para añadir al carrito
    "/api/test/addcart",
    [authJwt.verifyToken],
    controller.addcart
  );
};
