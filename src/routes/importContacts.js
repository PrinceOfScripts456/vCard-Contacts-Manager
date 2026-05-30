const express = require("express");
const router = express.Router();

const upload = require("../middlewares/importContacts");
const { importFile } = require("../controllers/importContactsController");


router.post("/", (req, res, next) => {

    console.log("POST: /contacts/import  -> importing file");
    next();

}, upload.single("file"), importFile, (req, res) => {

    res.json({
        redirectTo: "/contacts"
    });

});

module.exports = router;