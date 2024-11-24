const express = require("express");
const User = require("../models/user");
const router = express.Router();

// Create
router.post("/", (req, res) => {
  const newUser = new User(req.body);
  newUser
    .save()
    .then(() => res.status(201).send("Utente salvato"))
    .catch((err) =>
      res.status(400).send("Errore durante il salvataggio: " + err)
    );
});

// Read
router.get("/", (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(500).send("Errore nella lettura: " + err));
});

// Update
router.put("/:name", (req, res) => {
  User.updateOne({ name: req.params.name }, req.body)
    .then(() => res.send("Utente aggiornato"))
    .catch((err) =>
      res.status(400).send("Errore durante l'aggiornamento: " + err)
    );
});

// Delete
router.delete("/:name", (req, res) => {
  User.deleteOne({ name: req.params.name })
    .then(() => res.send("Utente eliminato"))
    .catch((err) =>
      res.status(500).send("Errore durante l'eliminazione: " + err)
    );
});
module.exports = router;
