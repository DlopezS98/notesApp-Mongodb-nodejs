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

const {isAuthenticated} = require('../helpers/authentication');

//Add new note
router.get("/notes/add", isAuthenticated, renderNotesForm);
router.post("/notes/new-note", isAuthenticated, createNewNote);

//Get all notes
router.get("/notes", isAuthenticated, renderAllNotes);

//update notes
router.get("/notes/edit/:id", isAuthenticated, renderEditForm); //Mostrar los datos de la nota a actualizar
router.put("/notes/edit/:id", isAuthenticated, updateNotes); //enviando para actualizar

//Delete note
router.delete("/notes/delete/:id", isAuthenticated, deleteNote);

module.exports = router;
