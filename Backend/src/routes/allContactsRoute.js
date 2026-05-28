const express = require("express");
const router = express.Router();

const { vCardsMemory } = require("../utils/utils");
// const { initializeVCards } = require("../utils/init");
const contacts = vCardsMemory;

// initializeVCards();

router.get("/", (req, res) => {

    console.log("GET: /contacts/  -> Showing all Contacts Page");
    console.log(contacts);
    res.render("allContacts", { contacts });

});

module.exports = router;