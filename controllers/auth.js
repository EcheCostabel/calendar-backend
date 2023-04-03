



const createUser = (req, res) => {

    const {name, email, password} = req.body;

    if( name.length < 5) {
        return res.status(400).json({
            ok: false,
            msg: 'El nombre no puede ser menor a 5 letras'
        })
    }

    res.json({
      ok: true,
      msg: 'create',
      name,
      email,
      password
});
}




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