const storage = require("../storage/autoStorage");

async function initializeVCards() {

    const contacts = {
        name: "Hamza",
        email: "prince@gmail.com",
        telephone: "03427290231",
        date: "21/02/2026",
        note: "Life is very strange Stranger!"
    };

    let createdContacts = await storage.create(contacts);

    if (!createdContacts) {
        console.error(" fun(): vCards initialization failed due to storage error");
        return;
    }

    console.log("vCards initialization complete.");
}

module.exports = { initializeVCards };