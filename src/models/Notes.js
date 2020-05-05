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

module.exports = model('Notes', notesSchema);