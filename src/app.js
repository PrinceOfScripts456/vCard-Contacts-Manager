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
    res.render("importFile");
});


module.exports = app;


/*
Routes info:
    > Save new Contact
    GET: http://localhost:5000/contacts/new
    POST: http://localhost:5000/contacts/new

    > Edit Contact
    PATCH: http://localhost:5000/contacts/:id/

    > View all Contacts
    GET: http://localhost:5000/contacts/

*/