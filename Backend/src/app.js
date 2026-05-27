const express = require("express");
const cors = require("cors");
const path = require("path");

const fileRoute = require("./routes/fileRoute");
const newContactRoute = require("./routes/newContactRoute");
// const editContactRoute = require("./routes/editContactRoute");
const allContactsRoute = require("./routes/allContactsRoute");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
app.use(express.static("public"));

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
// app.use("/file", fileRoute);
app.use("/contacts", allContactsRoute);
app.use("/contacts/new", newContactRoute);
// app.use("contacts/:id/edit", editContactRoute);


app.get("/", (req, res) => {
    res.send("server is running...");
});


module.exports = app;


/*
Routes info:
    > Save new Contact
    GET: http://localhost:5000/contacts/new
    POST: http://localhost:5000/contacts/new

    > Edit Contact
    PATCH: http://localhost:5000/contacts/:id/edit

    > View all Contacts
    GET: http://localhost:5000/contacts/

*/