const express = require("express");
require('dotenv').config();

console.log(process.env)

//Creo el servidor de express
const app = express();


//Directorio  Publico
app.use(express.static('public'));



//Rutas 
app.use('/api/auth', require('./routes/auth') )



//Escucha al puerto 3001
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
})