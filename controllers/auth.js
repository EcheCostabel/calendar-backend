const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { generateJWT } = require('../helpers/jwt')

const createUser = async(req, res) => {

    const { email, password} = req.body;

    try {
        let user = await User.findOne({ email }); 
        

        if ( user ) { //si ya existe un usuario con el mismo email retorno esto
            return res.status(400).json({
                ok: false,
                msg: 'Un usuario ya existe con ese correo'
            })
        }
        user = new User(req.body); //creo un nuevo usuario con lo que me llega en req.body

        //Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync( password, salt);

    
        await user.save();  // lo guardo en la base de datos de mongo
       
        //Generar JWT
        const token = await generateJWT(user.id, user.name);



    
        res.status(201).json({
          ok: true,
          uid: user.id,
          name: user.name,
          token
    
    });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Por favor comuniquese con el administrador'
        })

    }
};



const loginUser = async(req, res) => {

    const { email, password} = req.body;

    try {
        const user = await User.findOne({ email }); 
        

        if ( !user ) { //si NO existe un usuario con el mismo email retorno esto
            return res.status(400).json({
                ok: false,
                msg: 'El usuario no existe con ese email'
            })
        }

        //confirmar los passwords
        const validPasword = bcrypt.compareSync(password, user.password);
        if ( !validPasword ) {
            return res.status(400).json({
                ok: false,
                msg: 'Password incorrecto'
            })
        }

        //Generar nuestro JWT
        const token = await generateJWT(user.id, user.name);

        
        res.json({
            ok: true,
            uid: user.id,
            name: user.name,
            token
        });



    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Por favor comuniquese con el administrador'
        })
    }
 
};




const validateToken = async(req, res) => {
    const { uid, name } = req;

    const token = await generateJWT(uid, name);

    res.json({
        ok: true,
        uid,
        name,
        token,
    })
};







module.exports = {
    createUser,
    loginUser,
    validateToken
}