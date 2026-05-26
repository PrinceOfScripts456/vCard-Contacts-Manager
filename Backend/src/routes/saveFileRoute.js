const fs = require("fs");
const path = require("path");

function saveToFile( vCardsMemory , filename = "vCards") {
    const filePath = path.join(__dirname, `../../public/${filename}.json`);

    fs.writeFileSync(
        filePath,
        JSON.stringify(vCardsMemory, null, 2),
        "utf-8"
    );

    console.log(`Saved to ${filename}.json`);
}

module.exports = saveToFile;