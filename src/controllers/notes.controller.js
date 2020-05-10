const notesCtrl={};

const Note = require('../models/Notes');

notesCtrl.renderNotesForm = (req, res) =>{
    res.render('notes/new-note')
};

notesCtrl.createNewNote = async (req, res) =>{
    const {title, description} = req.body;
    const newNote = new Note({title: title, description: description});
    await newNote.save();
    res.redirect('/notes');
};

notesCtrl.renderAllNotes = async (req, res) =>{
    const notes = await Note.find();
    res.render('notes/all-notes', {notes}); //renderizando la vista (all-notes) de todas las notas en la carpeta "notes"
};

notesCtrl.renderEditForm = async (req, res) =>{
    const note = await Note.findById(req.params.id);
    console.log(note)
    res.render('notes/edit-notes', {note});
};

notesCtrl.updateNotes = async (req, res) =>{
    const {title, description} = req.body;
    await Note.findByIdAndUpdate(req.params.id, {title: title, description: description});
    res.redirect('/notes');
};

//Deleting note
notesCtrl.deleteNote = async (req, res) =>{
    await Note.findByIdAndDelete(req.params.id);
    res.redirect('/notes');
};

module.exports = notesCtrl;