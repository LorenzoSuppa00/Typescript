const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
// Simulazione di un database per gli utenti
const users = [{ id: 1, username: "admin", password: "password" }];
// Configura la strategia locale
passport.use(
  new LocalStrategy((username, password, done) => {
    const user = users.find((u) => u.username === username);
    if (!user) return done(null, false, { message: "Utente non trovato." });
    if (user.password !== password)
      return done(null, false, { message: "Password errata." });
    return done(null, user);
  })
);

// Serializza l'utente nella sessione
passport.serializeUser((user, done) => {
  done(null, user.id);
});
// Deserializza l'utente dalla sessione
passport.deserializeUser((id, done) => {
  const user = users.find((u) => u.id === id);
  done(null, user);
});
