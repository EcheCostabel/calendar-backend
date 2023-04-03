/*
    Events Routes
    /api/events
*/

const {Router} = require('express');
const router = Router();
const { jwtValidator } = require('../middlewares/jwt-validator');
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');
const { check } = require('express-validator');
const { imputsValidator } = require('../middlewares/imputs-validator');
const { isDate } = require('../helpers/isDate');

router.use(jwtValidator);   //Esto es porque todas las peticiones tienen que pasar por la validacion del jwtValidator


// Obtener eventos
router.get('/',getEvents);



//Crear nuevo evento
router.post('/', 
[
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('start', 'La fecha de inicio es obligatoria').custom(isDate),
    check('end', 'La fecha de finalizacion es obligatoria').custom(isDate),
    imputsValidator
]
, createEvent);



//Actualizar Evento
router.put('/:id', updateEvent);



//Eliminar Evento
router.delete('/:id', deleteEvent);


module.exports = router;