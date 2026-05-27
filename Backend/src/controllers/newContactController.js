const fs = require("fs");
const path = require("path");

const { vCardsMemory } = require("../utils/utils");

function saveToMemory(req, res, next) {

    const data = {};

    data.firstName = req.body.firstName.trim();
    data.lastName  = req.body.lastName.trim();
    data.fullName  = req.body.firstName.trim() + " " + req.body.lastName.trim();
    data.telephone = req.body.telephone.trim();
    data.email     = req.body.email.trim();
    data.date      = req.body.date;
    data.note      = req.body.note.trim();
    data.created_at= Date.now();

    if (req.body.date.length === 10) { // yyyy-mm-yy
        const [year, month, day] = req.body.date.split("-");

        const months = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];

        data.date = `${day}-${months[parseInt(month) - 1]}-${year}`;
    }

    vCardsMemory.push(data);

    console.log("  fun(): saved in RAM\n  vCards_Memory:");
    console.log(vCardsMemory);

    next();
}

function saveToFile(vCardsMem, filename = "vCards") {

    return (req, res, next) => {
        const filePath = path.join(__dirname, `../../public/exports/${filename}.json`);

        fs.writeFileSync(
            filePath,
            JSON.stringify(vCardsMem, null, 2),
            "utf-8"
        );

        console.log(`   fun(): Saved to ${filename}.json`);
        next();
    }
}

module.exports = { saveToMemory, saveToFile };