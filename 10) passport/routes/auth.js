const express = require("express");
const passport = require("passport");
const router = express.Router();
// Pagina di login
router.get("/login", (req, res) => {
  res.render("login");
});
// Gestisce il login
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
    failureFlash: false, // Puoi usare il flash per errori, se lo configuri
  })
);

router.get("/dashboard", (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  res.render("dashboard", { user: req.user });
});
// Logout
router.get("/logout", (req, res, next) => {
  req.logout(err => {
    if (err) {
      return next(err); // Gestisce eventuali errori
    }
    res.redirect("/login"); // Redirect dopo il logout
  });
});
module.exports = router;

