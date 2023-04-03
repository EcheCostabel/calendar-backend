/*
    Events Routes
    /api/events
*/

const {Router} = require('express');
const router = Router();
const { jwtValidator } = require('../middlewares/jwt-validator');
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');


router.use(jwtValidator);   //Esto es porque todas las peticiones tienen que pasar por la validacion del jwtValidator


// Obtener eventos
router.get('/',  getEvents);



//Crear nuevo evento
router.post('/', createEvent);



//Actualizar Evento
router.put('/:id', updateEvent);



//Eliminar Evento
router.delete('/:id', deleteEvent);


module.exports = router;