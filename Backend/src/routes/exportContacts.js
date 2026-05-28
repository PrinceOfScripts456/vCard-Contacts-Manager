const express = require("express");
const { vCardsMemory } = require("../utils/utils");
const router = express.Router();

router.get("/", (req, res) => {
    console.log("GET: /contacts/export  -> exporting file");

    if(vCardsMemory.length === 0) {
        return res.status(404).json({
            message: "data does not exist on server."
        });
    }

    const data = vCardsMemory;

    res.setHeader(
        "Content-Disposition",
        "attachment; filename=data.json"
    );

    res.setHeader("Content-Type", "application/json");

    res.send(JSON.stringify(data, null, 2));
});

module.exports = router;