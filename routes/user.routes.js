const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    //envio de headear con token
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  // rutas de testeo para dividir accesos segun el rol
  app.get("/api/test/all", controller.allAccess);

  app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

  app.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
  ////////////////////////////////////////

  //ruta para obtener el usuario segun su email
  app.get(
    "/api/test/usercart/:email",
    [authJwt.verifyToken],
    controller.findUserCart
  );
  //ruta para actualizar el usuario con imagen o direccion el usuario segun su email
  app.put("/api/test/update", [authJwt.verifyToken], controller.updateuser);
};
