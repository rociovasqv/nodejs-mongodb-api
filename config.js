const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/users_prueba";

const dbconnect = async () => {
    try{
        mongoose.set('strictQuery', true);
        
        await mongoose.connect(mongoURI,{});
        console.log("Conexión correcta");
    }
    catch(err){
        console.log("Error de conexión");
    }
}

module.exports = dbconnect;

//Por error, la conexión del MongoDB, usando esta línea de código: mongoose.prototype.connect() dejó de aceptar una función callback.
/* mongoose.connect(mongoURI, {},(err,res)=> {
         if(!err){
             console.log("Conexión correcta")
         }
         else{
             console.log("Error de conexión");
         }
     })*/