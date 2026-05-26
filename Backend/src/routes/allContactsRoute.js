const express = require("express");
const router = express.Router();

const { vCardsMemory } = require("../utils/utils");
let contacts = vCardsMemory;

router.get("/", (req, res) => {

    res.render("allContacts", { contacts });

});

module.exports = router;