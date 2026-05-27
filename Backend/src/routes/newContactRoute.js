const express = require("express");
const router = express.Router();

const { vCardsMemory } = require("../utils/utils");
const { validateRecievedvCard } = require("../middlewares/newContactMiddleware");
const { saveToMemory, saveToFile } = require("../controllers/newContactController");


router.get("/", (req, res) => {
    console.log("GET: /contacts/new/  -> showing Create new Contact Page");
    res.render("newContact");
});


router.post("/", (req, res, next) => {
    console.log("POST: /contacts/new/  -> Saving new Contact");
    next();
},
    validateRecievedvCard, saveToMemory, saveToFile(vCardsMemory), (req, res) => {
        res.redirect("/contacts");
    }
);


module.exports = router;