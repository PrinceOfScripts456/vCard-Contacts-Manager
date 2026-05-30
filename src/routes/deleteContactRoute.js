const express = require("express");
const router = express.Router();

const storage = require("../storage/autoStorage");


router.delete("/:id", async (req, res) => {
    console.log("DELETE: /contacts/:id  -> deleting contact");

    try {

        const deletedContact = await storage.findByIdAndDelete(req.params.id);

        if (!deletedContact) {
            console.error(" fun(): contact not found");
            console.log("--------------------------------");

            return res.status(404).json({
                message: "Contact not found",
            });
        }

        console.log(" fun(): contact deleted successfully");
        console.log("--------------------------------");

        res.json({
            message: "Contact deleted successfully",
            deletedContact,
        });

    } catch (err) {
        console.error(err);
        console.log("--------------------------------");

        res.status(500).json({
            message: "Deletion failed",
        });
    }
});

module.exports = router;