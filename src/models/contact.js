const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    fullName: String,
    telephone: String,
    email: String,
    date: String,
    note: String,
    created_at: String,
    modified_at: String
}, {
    timestamps: {
        createdAt: "mongoCreatedAt",
        updatedAt: "mongoUpdatedAt"
    }
});

module.exports = mongoose.model("Contact", contactSchema);