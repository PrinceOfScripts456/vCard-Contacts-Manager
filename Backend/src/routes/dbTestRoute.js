const express = require("express");
const router = express.Router();

const Contact = require("../models/contact");

router.get("/", async (req, res) => {

    try {

        let contacts = await Contact.find();
        res.json(contacts);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

});

module.exports = router;