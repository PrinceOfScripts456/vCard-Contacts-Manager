
function initializeVCards() {

    const storage = require("../storage/autoStorage");

    const contacts = {
        name: "Hamza",
        email: "prince@gmail.com",
        telephone: "03427290231",
        date: "21/02/2026",
        note: "Life is very strange Stranger!"
    };

    storage.createContact(contacts);

    console.log("vCards initialization complete.");
}

module.exports = { initializeVCards };