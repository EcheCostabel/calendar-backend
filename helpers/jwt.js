const jwt = require('jsonwebtoken');
require('dotenv').config();


const generateJWT = (uid, name) => {

    return new Promise ( (resolve, reject) => {

        const payload = { uid, name};

        jwt.sign(payload, process.env.SECRET_JWT_SEED, { // palabra secreta que uso para firmar mis tokens
            expiresIn: '2h'  //tiempo en que expira el token
        }, (err, token) => {

            if(err){
                console.log(err)
                reject('No se pudo generar el token')
            }

            resolve(token);
        })
    })

}





module.exports = {
    generateJWT
}