const { Router } = require("express");
const router = Router();

const {
  renderNotesForm,
  createNewNote,
  renderAllNotes,
  renderEditForm,
  updateNotes,
  deleteNote,
} = require("../controllers/notes.controller");

//Add new note
router.get("/notes/add", renderNotesForm);
router.post("/notes/new-note", createNewNote);

//Get all notes
router.get("/notes", renderAllNotes);

//update notes
router.get("/notes/edit/:id", renderEditForm); //Mostrar los datos de la nota a actualizar
router.put("/notes/edit/:id", updateNotes); //enviando para actualizar

//Delete note
router.delete("/notes/delete/:id", deleteNote);

module.exports = router;
