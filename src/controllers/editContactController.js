
const storage = require("../storage/autoStorage");


async function updateContact(req, res, next) {

    const data = {
        firstName: req.body.firstName.trim(),
        lastName: req.body.lastName.trim(),
        fullName: req.body.firstName.trim() + " " + req.body.lastName.trim(),
        telephone: req.body.telephone.trim(),
        email: req.body.email.trim(),
        date: req.body.date,
        note: req.body.note.trim(),
        modified_at: `${Date.now()}`
    };

    if (req.body.date.length === 10) { // yyyy-mm-yy
        const [year, month, day] = req.body.date.split("-");

        const months = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];

        data.date = `${day}-${months[parseInt(month) - 1]}-${year}`;
    }

    console.log("DATA: ", data);
    try {

        const editedContact = await storage.findByIdAndUpdate(req.params.id, data);

        if (!editedContact) {

            return res.status(404).json({
                message: "Contact not found",
            });
        }

        return res.json({
            message: "Contact edited successfully",
            editedContact,
        });

    } catch (err) {
        console.error(err);

        res.status(500).json({
            message: "Updation failed",
        });
    }

    next();
}

module.exports = { updateContact };



