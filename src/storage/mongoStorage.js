const Contact = require("../models/contact");

async function createContact(data) {
    console.log(" fun(): contact saved in DB.");

    return Contact.create(data);
}

async function getAllContacts() {
    return Contact.find();
}

async function deleteContact(id) {
    return Contact.findByIdAndDelete(id);
}

async function updateContact(id) {
    return Contact.findByIdAndUpdate(id);
}

// module.exports = { createContact, getAllContacts, updateContact, deleteContact };

module.exports = Contact;
