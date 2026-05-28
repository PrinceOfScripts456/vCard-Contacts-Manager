
let { vCardsMemory } = require("../utils/utils");

function importFile (req, res, next) {

    try {

        const fileBuffer = req.file.buffer;

        const fileContent = fileBuffer.toString("utf-8");

        const jsonData = JSON.parse(fileContent);

        vCardsMemory.length = 0;
        vCardsMemory.push(...jsonData);

        console.log("  fun(): imported to RAM, saved in Memory");

    } catch (err) {
        console.log(err);
    }
    next();
}

module.exports = { importFile };