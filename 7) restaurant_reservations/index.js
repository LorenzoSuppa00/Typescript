// Importazione dei moduli
const express = require("express");
const bodyParser = require("body-parser"); //? Gestisce richieste JSON
const app = express();
const PORT = 3000;
// Middleware
app.use(bodyParser.json()); // Per gestire JSON
// Array per memorizzare le prenotazioni
let reservations = [];
// Route per aggiungere una prenotazione
app.post("/reservations", (req, res) => {
  const { customerName, date, numberOfPeople } = req.body; //! req.body ?
  const reservation = { customerName, date, numberOfPeople };
  reservations.push(reservation);
  res.status(201).send("Prenotazione aggiunta!"); //! ???
});

//* Homepage
app.get("/", (req, res) => {
  res.send("Homepage");
})

// Route per visualizzare tutte le prenotazioni
app.get("/reservations", (req, res) => {
  res.json(reservations); //? Restituisce le prenotazioni in formato JSON 
});
// Middleware per gestire errori
app.use((err, req, res, next) => {
  console.error(err.stack); //! err.stack ?
  res.status(500).send("Qualcosa è andato storto!"); //! ???
});
// Avvio del server
app.listen(PORT, () => {
  console.log(`Server in ascolto su http://localhost:${PORT}`);
});

