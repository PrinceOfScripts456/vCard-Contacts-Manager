const express = require("express");
const multer = require("multer");
const router = express.Router();

const upload = require("../middlewares/fileMiddleware");
const fileController = require("../controllers/fileController");

router.post("/upload", upload.single("file"), fileController);

module.exports = router;