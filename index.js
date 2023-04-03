const express = require("express");
require('dotenv').config();

console.log(process.env)

//Creo el servidor de express
const app = express();


//Directorio  Publico
app.use(express.static('public'));



//Rutas 
// app.get('/', (req, res) => {

//     console.log('/ Requerido');
//     res.json({
//         ok: true,

//     })
// });




//Escucha al puerto 3001
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
})