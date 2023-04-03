const express = require("express");



//Creo el servidor de express
const app = express();



//Rutas 

app.get('/', (req, res) => {

    console.log('/ Requerido');
    res.json({
        ok: true,
        
    })
});




//Escucha al puerto 3001
app.listen(3001, () => {
    console.log(`Servidor corriendo en puerto ${3001}`)
})