const storage = require("../storage/autoStorage");
const { formatDate } = require("../utils/utils");


async function saveContact(req, res, next) {

    try {
        const data = {
            firstName: req.body.firstName.trim(),
            lastName: req.body.lastName.trim(),
            fullName: req.body.firstName.trim() + " " + req.body.lastName.trim(),
            telephone: req.body.telephone.trim(),
            email: req.body.email.trim(),
            date: formatDate(req.body.date),
            note: req.body.note.trim(),
            created_at: `${Date.now()}`,
            modified_at: `${Date.now()}`
        };

        const savedContact = await storage.create(data);

        if (!savedContact) {
            console.error("  fun(): contact NOT saved.");

            return res.status(500).json({
                message: "error occured while saving contact",
            });
        }

        console.log("  fun(): contact saved.");

    } catch (err) {
        console.error("ERROR", err);

        return res.status(500).json({
            message: "error occured while saving contact"
        });
    }

    next();
}


module.exports = { saveContact };