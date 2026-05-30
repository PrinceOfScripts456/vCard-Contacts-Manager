const express = require("express");
const router = express.Router();

// const ContactDB = require("../models/contact");
const storage = require("../storage/autoStorage");

router.get("/", async (req, res) => {
    console.log("GET: /contacts/  -> Showing all Contacts Page");

    const contacts = await storage.find();

    console.log(contacts);

    res.render("allContacts", { contacts });

    // let c = await storage.find({}, ' fullName lastName');
    // console.log(c);

});

module.exports = router;