const express = require("express");

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(require("./routes/index"));

//levantar servidor
app.listen(3000);
console.log("Server on port", 3000);

/*para crear el script npm run dev, añadir la linea:
"dev": "nodemon "ruta del archivo principal"   "

*/
