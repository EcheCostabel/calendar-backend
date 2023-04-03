

const createUser = (req, res) => {
    res.json({
        ok: true,
        msg: 'registro'
    })
};

const loginUser = (req, res) => {
    res.json({
        ok: true,
        msg: 'login'
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