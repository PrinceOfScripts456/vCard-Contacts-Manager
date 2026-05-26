const express = require("express");
const router = express.Router();

const { vCardsMemory } = require("../utils/utils");
const saveToFile = require("../routes/saveFileRoute");

// Create new Contact
router.get("/", (req, res) => {
    res.render("newContact");
});

// Save new Contact
router.post("/", (req, res) => {

    vCardsMemory.push(req.body);

    saveToFile(vCardsMemory, "vCards");

    res.send(req.body);
    // res.redirect("http://127.0.0.1:5500/vCard-Contacts-Manager/Frontend/views/newContact.html");
});

module.exports = router;