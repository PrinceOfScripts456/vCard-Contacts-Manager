const express = require("express");
const router = express.Router();

const storage = require("../storage/autoStorage");


router.get("/", async (req, res) => {
    console.log("GET: /contacts/  -> Showing all Contacts Page");

    try {

        const contacts = await storage.find({});

        res.render("allContacts", { contacts });

        console.log(contacts);
        console.log("total:", contacts.length);

    } catch (err) {
        console.error("ERROR:", err);
        console.log("--------------------------------");

        return res.status(500).json({
            message: "request failed",
        });
    }
});

module.exports = router;