const express = require("express");
const session = require("express-session");
const passport = require("passport");
const authRoutes = require("./routes/auth");
require("./config/passport-setup");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.set("view engine", "ejs"); // Imposta EJS come motore di visualizzazione
app.use(express.urlencoded({ extended: false })); // Middleware per analizzare i dati del form;
app.use(session({ secret: "secret", resave: false, saveUninitialized: false })); //
// Configura la sessione
app.use(passport.initialize()); // Inizializza Passport
app.use(passport.session()); // Gestisce le sessioni con Passport
// Route
app.use("/", authRoutes); // Utilizza le rotte di autenticazione
// Avvio del server
app.listen(PORT, () => {
  console.log(`Server in esecuzione su http://localhost:${PORT}`);
});
