const express = require("express");
const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const mainRoutes = require ("./routes/mainRoutes");

app.use("/", mainRoutes);

app.listen(3300, () => {console.log("hola! El servidor está corriendo en el puerto 3300")})