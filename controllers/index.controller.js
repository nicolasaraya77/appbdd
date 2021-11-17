//libreria pool de conexion a BDD
const { Pool } = require("pg");

//conectar a la bdd
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "password",
  database: "appbdd",
  port: "5432",
});

//obtener todos los usuarios
const getUsers = async (req, res) => {
  const response = await pool.query("SELECT * FROM users ORDER BY id ASC");
  console.log(response);
  res.status(200).json(response.rows);
};

//obtener usuarios por id
const getUserById = async (req, res) => {
  console.log(req);
  const id = parseInt(req.params.id);
  const response = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
  res.json(response.rows);
};

//crear usuario
const createUser = async (req, res) => {
  const { name, email } = req.body;
  const response = await pool.query(
    "INSERT INTO users (name, email) VALUES ($1, $2)",
    [name, email]
  );
  res.json({
    message: "User Added successfully",
    body: {
      user: { name, email },
    },
  });
};

//actualizar usuario
const updateUser = async (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;

  const response = await pool.query(
    "UPDATE users SET name = $1, email = $2 WHERE id = $3",
    [name, email, id]
  );
  res.json("User Updated Successfully");
};

//eliminar usuario
const deleteUser = async (req, res) => {
  const id = parseInt(req.params.id);
  await pool.query("DELETE FROM users where id = $1", [id]);
  res.json(`User ${id} deleted Successfully`);
};

const homeApp = async (req, res) => {
  const response = await pool.query("SELECT * FROM users ORDER BY id ASC");

  res.render("index", {
    title: "Aquí un título es ingresado",
    header: "Aquí un encabezado se agrega",
    paragraph: "hola",
    users: response.rows,
  });
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  homeApp,
};
