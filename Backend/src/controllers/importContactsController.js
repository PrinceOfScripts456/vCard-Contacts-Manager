
const ContactDB = require("../models/contact");

async function importFile(req, res, next) {

    try {

        const fileBuffer = req.file.buffer;

        const fileContent = fileBuffer.toString("utf-8");

        const jsonData = JSON.parse(fileContent);

        await ContactDB.create(jsonData);

    } catch (err) {
        console.log(err);
    }
    next();
}

module.exports = { importFile };