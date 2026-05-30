const express = require("express");
const router = express.Router();

const { validateRecievedvCard } = require("../middlewares/newContactMiddleware");
const { saveContact } = require("../controllers/newContactController");


router.get("/", (req, res) => {
    console.log("GET: /contacts/new/  -> showing Create new Contact Page");

    res.render("newContact");

    console.log("--------------------------------");
});


router.post("/", (req, res, next) => {
    console.log("POST: /contacts/new/  -> Saving new Contact");
    next();
},
    validateRecievedvCard,
    saveContact,
    (req, res) => {
        res.redirect("/contacts");
        console.log("--------------------------------");
    }
);


module.exports = router;