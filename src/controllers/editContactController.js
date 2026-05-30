const storage = require("../storage/autoStorage");
const { formatDate } = require("../utils/utils");


async function updateContact(req, res, next) {
    try {
        const data = {
            firstName: req.body.firstName.trim(),
            lastName: req.body.lastName.trim(),
            fullName: req.body.firstName.trim() + " " + req.body.lastName.trim(),
            telephone: req.body.telephone.trim(),
            email: req.body.email.trim(),
            date: formatDate(req.body.date),
            note: req.body.note.trim(),
            modified_at: `${Date.now()}`
        };

        const editedContact = await storage.findByIdAndUpdate(req.params.id, data);

        if (!editedContact) {
            console.log("  fun(): contact not found");
            console.log("--------------------------------");

            return res.status(404).json({
                message: "Contact not found",
            });
        }

        console.log("  fun(): contact saved");

    } catch (err) {
        console.error(err);
        console.log("--------------------------------");

        return res.status(500).json({
            message: "Updation failed",
        });
    }

    next();
}

module.exports = { updateContact };



