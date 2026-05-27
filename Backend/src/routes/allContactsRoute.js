const express = require("express");
const router = express.Router();

const { vCardsMemory } = require("../utils/utils");
const { initializeVCards } = require("../utils/init");
const contacts = vCardsMemory;

initializeVCards();

router.get("/", (req, res) => {

    res.render("allContacts", { contacts });
    console.log("POST: /contacts/  -> Showing all Contacts Page");

});

module.exports = router;