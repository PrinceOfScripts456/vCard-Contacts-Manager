const express = require("express");
const cors = require("cors");
const path = require("path");


const newContactRoute = require("./routes/newContactRoute");
const editContactRoute = require("./routes/editContactRoute");
const allContactsRoute = require("./routes/allContactsRoute");
const importContacts = require("./routes/importContacts");
const exportContacts = require("./routes/exportContacts");
const deleteContactRoute = require("./routes/deleteContactRoute");
const dbTestRoute = require("./routes/dbTestRoute");


const app = express();


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
app.use(express.static("public"));


// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.use("/contacts", allContactsRoute);
app.use("/contacts/new", newContactRoute);
app.use("/contacts/import", importContacts);
app.use("/contacts/export", exportContacts);
app.use("/contacts", editContactRoute);
app.use("/contacts", deleteContactRoute);

app.use("/db", dbTestRoute);

app.get("/", (req, res) => {
    console.log("GET: /  -> Showing all file upload page");
    res.render("importFile");
    console.log("--------------------------------");
});

app.use("/", (req, res) => {
    res.send("Error 404 - Page not found.");
});

module.exports = app;


/*
Routes info:

    GET:   http://localhost:5000/contacts/          ->  show all contacts

    GET:   http://localhost:5000/contacts/new/      -> show new contact form page
    POST:  http://localhost:5000/contacts/new/      -> save new contact
    
    POST:  http://localhost:5000/contacts/import/   -> import file (.json for now)

    GET:   http://localhost:5000/contacts/export/   -> provides export file

    GET:   http://localhost:5000/contacts/:id/      -> show contact
    PATCH: http://localhost:5000/contacts/:id/      -> save edited contact

    DELETE: http://localhost:5000/contacts/:id/     -> delete contact

*/