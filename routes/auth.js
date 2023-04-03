// Rutas de Usuarios / Auth
// host + /api/auth


const {Router} = require('express');
const { check } = require('express-validator')
const router = Router();
const { createUser, loginUser, validateToken } = require('../controllers/auth');
const { imputsValidator } = require('../middlewares/imputs-validator');



router.post('/new',
 [
    check('name', 'El nombre es obligatorio').not().isEmpty(), // exto es para validar los campos del formulario de creacion
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe ser de 6 caracteres').isLength({min : 6}),
    imputsValidator
], 
 createUser);


router.post('/',
[
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe ser de 6 caracteres').isLength({min : 6}),
    imputsValidator
],
loginUser);


router.get('/renew', validateToken);



module.exports = router;