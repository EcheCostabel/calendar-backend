const User = require('../models/User')



const createUser = async(req, res) => {

    // const {name, email, password} = req.body;

    try {
        const user = new User(req.body); //creo un nuevo usuario con lo que me llega en req.body
    
        await user.save();  // lo guardo en la base de datos de mongo
       
    
        res.status(201).json({
          ok: true,
          msg: 'registro',
    
    });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Por favor comuniquese con el administrador'
        })

    }
};



const loginUser = (req, res) => {

    const { email, password} = req.body;

 
    res.json({
        ok: true,
        msg: 'login',
        email,
        password
    })
};




const validateToken = (req, res) => {


    res.json({
        ok: true,
        msg: 'validateToken'
    })
};







module.exports = {
    createUser,
    loginUser,
    validateToken
}