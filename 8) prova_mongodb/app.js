const mongoose = require("mongoose");
// Connessione a MongoDB
mongoose.connect("mongodb://localhost:27017/mydatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// Definizione dello schema
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
});
// Creazione del modello
const User = mongoose.model("User", userSchema);
// Creazione di un nuovo utente
const createUser = async () => {
  const user = new User({
    name: "Cerbiatto",
    age: 29,
    email: "john@example.com",
  });
  await user.save();
  console.log("Utente creato:", user);
};
// Esecuzione della funzione di creazione
createUser().catch((error) => console.error(error));

//* Trova tutti gli utenti
User.find()
  .then((users) => console.log(users))
  .catch((err) => console.error("Errore nella lettura:", err));

User.updateOne({ name: "Mario" }, { age: 54 })
  .then(() => console.log("Utente aggiornato"))
  .catch((err) => console.error("Errore durante l'aggiornamento:", err));

User.deleteOne({ _id: "673a871487af17c04572edb1" })
  .then(() => console.log("Utente eliminato"))
  .catch((err) => console.error("Errore durante l'eliminazione:", err));

User.deleteMany({ name: "Cerbiatto" })
  .then(() => console.log("Utenti eliminati"))
  .catch((err) => console.error("Errore durante l'eliminazione:", err));
