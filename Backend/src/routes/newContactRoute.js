const express = require("express");
const router = express.Router();

const { vCardsMemory } = require("../utils/utils");
const saveToFile = require("../routes/saveFileRoute");

// save new Contact
router.post("/", (req, res) => {

    vCardsMemory.push(req.body);

    saveToFile(vCardsMemory, "vCards");

    res.send([req.body, { message: "saved" }]);
    // res.redirect("http://127.0.0.1:5500/vCard-Contacts-Manager/Frontend/views/newContact.html");
});

module.exports = router;