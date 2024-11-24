const express = require("express");
const bodyParser = require("body-parser"); //? Gestisce richieste JSON
// per risolvere il problema CORS, comunicazione tra due server a porte diverse
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

let utenti = [];
let nextID = 1;

//* 1) Ottenere la lista degli utenti (GET)
app.get("/utenti", (req, res) => {
  res.json(utenti);
});

//* 2) Aggiungi utente alla lista degli utenti (POST)
app.post("/utenti", (req, res) => {
  const { nome, cognome, cod_fis } = req.body;
  const nuovoUtente = { id: nextID++, nome, cognome, cod_fis };
  utenti.push(nuovoUtente);
  res.status(201).json("Utente aggiunto correttamente!");
});

//* 3) Gestione errori di input e di rete?
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Qualcosa è andato storto!");
});

//* 4) Avvio del server -> Quindi test con Postman
app.listen(PORT, () => {
  console.log(`Server in ascolto su http://localhost:${PORT}`);
});
