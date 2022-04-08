const express = require("express");
const app = express();


app.use(express.urlencoded({extended: false}));
app.use(express.json());

const mainRoutes = require ("./routes/mainRoutes");

app.use("/", mainRoutes);

app.listen(3300, () => {console.log("servidor corriendo en el puerto 3300")})