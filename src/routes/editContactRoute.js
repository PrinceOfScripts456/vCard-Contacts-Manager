const express = require("express");
const router = express.Router();

const { validateRecievedvCard } = require("../middlewares/newContactMiddleware");
const { updateContact } = require("../controllers/editContactController");
const storage = require("../storage/autoStorage");
const { convertToISO } = require("../utils/utils");


router.get("/:id", async (req, res) => {
    console.log("GET: /contacts/:id  -> showing contact");

    try {

        const contact = await storage.findById(req.params.id);

        if (!contact) {
            console.log(" fun():  contact not found");
            console.log("--------------------------------");

            return res.status(404).json({
                message: "Contact not found",
            });
        }

        contact.date = convertToISO(contact.date);

        res.render("editContact", { contact });

    } catch (err) {
        console.error(err);
        console.log("--------------------------------");

        res.status(500).json({
            message: "Updation failed",
        });
    }

    console.log("--------------------------------");
});


router.patch("/:id", (req, res, next) => {
    console.log("PATCH: /contacts/:id  -> updating contact");
    next();
},
    validateRecievedvCard,
    updateContact,
    (req, res) => {
        res.json({ redirectTo: "/contacts" });
        console.log("--------------------------------");
    }
);


module.exports = router;