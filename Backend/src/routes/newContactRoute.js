const express = require("express");
const router = express.Router();

const { vCardsMemory } = require("../utils/utils");
const saveToFile = require("../routes/saveFileRoute");

// Create new Contact
router.get("/", (req, res) => {
    res.render("newContact");
    console.log("GET: /contacts/new/  -> showing Create new Contact Page");
});

// Save new Contact
router.post("/", (req, res) => {

    vCardsMemory.push(req.body);

    saveToFile(vCardsMemory, "vCards");

    console.log("POST: /contacts/new/  -> Saving new Contact(BETA)");

    res.redirect("/contacts/");
});

module.exports = router;