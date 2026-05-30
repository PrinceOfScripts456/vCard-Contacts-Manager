const storage = require("../storage/autoStorage");


async function importFile(req, res, next) {

    try {

        const fileBuffer = req.file.buffer;

        const fileContent = fileBuffer.toString("utf-8");

        const jsonData = JSON.parse(fileContent);

        const createdContacts = await storage.create(jsonData);

        if (!createdContacts) {
            console.error(" fun(): file importing failed");

            return res.status(500).json({
                message: "error occured while importing file",
            });
        }
        else {
            console.log(" fun(): file imported successfuly");
        }

    } catch (err) {
        console.error(err);

        return res.status(500).json({
            message: "error occured while importing file",
        });
    }

    next();
}

module.exports = { importFile };