const express = require("express");
const path = require("path");
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Indica el directorio donde se encuentran los archivos de las vistas ('views')
app.set("views", path.join(__dirname, "views"));

// Indica el motor de plantilla que se utiliza, en este ejemplo se utiliza 'pug'
app.set("view engine", "pug");

// Routes
app.use(require("./routes/index"));

//levantar servidor
app.listen(3000);
console.log("Server on port", 3000);

/*para crear el script npm run dev, añadir la linea:
"dev": "nodemon "ruta del archivo principal"   "
*/
