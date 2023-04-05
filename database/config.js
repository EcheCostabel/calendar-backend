const mongoose = require('mongoose');


const dbConnection = async () => {


    try {
       await  mongoose.connect('mongodb+srv://mern_user:0JGwqdEUXej6xuUs@cluster0.7ctbvek.mongodb.net/test');
       console.log('db online');
       

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de inicializar base de datos')
    }
}

module.exports = {
    dbConnection
}