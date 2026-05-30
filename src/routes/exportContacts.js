const express = require("express");
const router = express.Router();

const storage = require("../storage/autoStorage");


router.get("/", async (req, res) => {
    console.log("GET: /contacts/export  -> exporting file");

    try {

        const data = await storage.find({}, '-_id');

        if (data.length === 0) {
            console.error(" fun(): exporting contacts failed - data does not exists on server");
            console.log("--------------------------------");

            return res.status(404).json({
                message: "Data does not exist on server."
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

        console.log(" fun(): contacts file exported");

    } catch (err) {
        console.error(error);
        console.log("--------------------------------");

        return res.status(500).json({
            message: "error occured while exporting file",
        });
    }

    console.log("--------------------------------");
});

module.exports = router;