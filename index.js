const express = require("express");
require('dotenv').config();
const { dbConnection } = require('./database/config');
const cors = require('cors');


//Creo el servidor de express
const app = express();


//Base de datos
dbConnection();


// // CORS
app.use(cors());

//Directorio  Publico
app.use(express.static('public'));


//Lectura y parseo del body
app.use(express.json());


//Rutas 
app.use('/api/auth', require('./routes/auth') );
app.use('/api/events', require('./routes/events') ); 


const PORT = process.env.PORT || 3001;
//Escucha al puerto 3001
app.listen(PORT , () => {
    console.log(`Servidor corriendo en puerto ${PORT}`)
});