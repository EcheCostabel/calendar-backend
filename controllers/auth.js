const { validationResult } = require('express-validator')



const createUser = (req, res) => {

    const {name, email, password} = req.body;

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }

    res.status(201).json({
      ok: true,
      msg: 'registro',
      name,
      email,
      password
});
}



const loginUser = (req, res) => {

    const { email, password} = req.body;

    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }

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