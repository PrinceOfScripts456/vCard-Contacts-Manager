const express = require("express");
const router = express.Router();

const { validateRecievedvCard } = require("../middlewares/newContactMiddleware");
const { updateContact } = require("../controllers/editContactController");
const ContactDB = require("../models/contact");

router.get("/:id", async (req, res) => {
    console.log("GET: /contacts/:id  -> showing contact");

    try {

        const contact = await ContactDB.findById(req.params.id);

        contact.date = convertToISO(contact.date);

        if (!contact) {
            return res.status(404).json({
                message: "Contact not found",
            });
        }

        res.render("editContact", { contact });

    } catch (err) {
        console.error(err);

        res.status(500).json({
            message: "Updation failed",
        });
    }
});


router.patch("/:id", (req, res, next) => {
    console.log("PATCH: /contacts/:id  -> updating contact");
    next();
},
    validateRecievedvCard, updateContact, (req, res) => {
        res.redirect("/contacts");
    }
);

module.exports = router;



function convertToISO(dateStr) {
  const months = {
    Jan: "01", Feb: "02", Mar: "03", Apr: "04",
    May: "05", Jun: "06", Jul: "07", Aug: "08",
    Sep: "09", Oct: "10", Nov: "11", Dec: "12",
  };

  const [day, mon, year] = dateStr.split("-");

  return `${year}-${months[mon]}-${day.padStart(2, "0")}`;
}
