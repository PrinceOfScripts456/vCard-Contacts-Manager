const express = require("express");
const router = express.Router();

const storage = require("../storage/autoStorage");


router.delete("/:id", async (req, res) => {
    try {
        console.log("DELETE: /contacts/:id  -> deleting contact");

        const deletedContact = await storage.findByIdAndDelete(req.params.id);

        if (!deletedContact) {
            return res.status(404).json({
                message: "Contact not found",
            });
        }

        res.json({
            message: "Contact deleted successfully",
            deletedContact,
        });

    } catch (err) {
        console.error(err);

        res.status(500).json({
            message: "Deletion failed",
        });
    }
});

module.exports = router;