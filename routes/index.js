//llamamos a la funcion Router para crear rutas
const { Router } = require("express");
const router = Router();

//controladores
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  homeApp,
} = require("../controllers/index.controller");

//creación de rutas  (url,controlador(funcion))

//ruta de retorno
router.get("/users", getUsers);
router.get("/users/:id", getUserById);

//ruta de insercion
router.post("/users", createUser);
//ruta de actualizacion
router.put("/users/:id", updateUser);
//ruta de eliminacion
router.delete("/users/:id", deleteUser);

router.get("/", homeApp);

//exportar todas las rutas
module.exports = router;
