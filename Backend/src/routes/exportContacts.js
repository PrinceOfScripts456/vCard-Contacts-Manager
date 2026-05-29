const express = require("express");
const router = express.Router();

const ContactDB = require("../models/contact");

router.get("/", async (req, res) => {
    try {
        console.log("GET: /contacts/export  -> exporting file");

        const data = await ContactDB.find();

        if (data.length === 0) {
            return res.status(404).json({
                message: "data does not exist on server."
            });
        }

        let filename = req.query.filename || "contacts";
        filename = filename.replace(/[^a-zA-Z0-9-_]/g, "");

        res.setHeader(
            "Content-Disposition",
            `attachment; filename=${filename}`
        );

        res.setHeader("Content-Type", "application/json");

        res.send(JSON.stringify(data, null, 2));

    } catch (err) {
        console.error(error);

        res.status(500).json({
            message: "Export failed",
        });
    }
});

module.exports = router;