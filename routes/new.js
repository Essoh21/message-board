const express = require("express");
const router = express.Router();
const messages = require("./index").messages;

// touting to new form
router.get("/new", function (req, res, next) {
  const title = "form to fill";
  res.render("form", { title });
});

router.post("/new", (req, res, next) => {
  const title = "User message";
  const user = req.body.user;
  const text = req.body.message;
  const added = new Date();
  messages.push({ user, text, added });
  res.redirect("/");
});

module.exports = router;
