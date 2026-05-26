const multer = require("multer");
const path = require("path");

const allowedExtensions = [".vcf"];
const allowedMimeTypes = ["text/x-vcard"];

const storage = multer.memoryStorage();

// const storage = multer.diskStorage({
    
//     destination: 'uploads/',
    
//     filename: (req, file, cb) => {
//         const uniqueName = Date.now() + "_" + Math.floor(Math.random() * 1e3) + "_" + file.originalname;
//         cb(null, uniqueName);
//     }
// });

const upload = multer({
    storage,

    limits: {
        fileSize: 1024 * 1024 * 20
    },

    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname).toLowerCase();

        const validExtension = allowedExtensions.includes(ext);
        const validMimeType = allowedMimeTypes.includes(file.mimetype);

        if(!validExtension || !validMimeType) {
            return cb(new Error("Only .vcf vCard files are allowed."));
        }

        cb(null,true);
    }
});

module.exports = upload;