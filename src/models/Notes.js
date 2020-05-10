const { Schema, model } = require('mongoose');

const notesSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
},{
    timestamps: true,
});

module.exports = model('Notes', notesSchema); //Para añadir un nombre a la coleccion solo basta con pasar un parametro mas ejem: model('Notes', notesSchema, 'misNotas');