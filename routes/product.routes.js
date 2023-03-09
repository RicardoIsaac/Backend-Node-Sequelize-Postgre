const controller = require("../controllers/product.controller")
const { authJwt } = require("../middleware");

module.exports = function(app) {


    app.post("api/product/create",controller.createProduct)
    app.post("/api/product/test", controller.createProduct)
    app.get("/api/product/allproducts", 
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.getall
    )
}