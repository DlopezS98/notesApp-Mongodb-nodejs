const notesCtrl={};

notesCtrl.renderNotesForm = (req, res) =>{
    res.send('notes add');
};

notesCtrl.createNewNote = (req, res) =>{
    res.send('new note');
};

notesCtrl.renderAllNotes = (req, res) =>{
    res.send('render note');
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