const notesCtrl={};

const Note = require('../models/Notes');

notesCtrl.renderNotesForm = (req, res) =>{
    res.render('notes/new-note')
};

notesCtrl.createNewNote = async (req, res) =>{
    const {title, description} = req.body;
    const newNote = new Note({title: title, description: description});
    await newNote.save();
    res.send('new note');
};

notesCtrl.renderAllNotes = async (req, res) =>{
    const notes = await Note.find();
    res.render('notes/all-notes', {notes}); //renderizando la vista (all-notes) de todas las notas en la carpeta "notes"
};

notesCtrl.renderEditForm = (req, res) =>{
    res.send('edit note');
};

notesCtrl.updateNotes = (req, res) =>{
    res.send('update note');
};

notesCtrl.deleteNote = (req, res) =>{
    res.send('delete note');
};

module.exports = notesCtrl;