const express = require("express");
const router = express.Router();

const ContactDB = require("../models/contact");

router.get("/", async (req, res) => {
    console.log("GET: /contacts/  -> Showing all Contacts Page");

    const contacts = await ContactDB.find();

    console.log(contacts);

    res.render("allContacts", { contacts });

});

module.exports = router;