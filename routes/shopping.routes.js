const { authJwt } = require("../middleware");
const controller = require("../controllers/shopping.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });

      app.put(
        "/api/test/shop",
             [authJwt.verifyToken],
        controller.shopping
      )
      app.put(
        "/api/test/addcart",
    [authJwt.verifyToken],
        controller.addcart
      )
}