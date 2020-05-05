const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

//Creando el esquema del usuario
const usersSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    }
},{
    timestamps: true,
});

//encriptando la contraseña del usuario con bcryptjs
usersSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

//cifrando la contraseña del login y comparar con el hash guardado en la bd
usersSchema.methods.matchPassword = async function(password){
    return await bcrypt.compare(password, this.password);
}


module.exports = model('Users', usersSchema);