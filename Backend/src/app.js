const express = require("express");
const cors = require("cors");

const fileRoute = require("./routes/fileRoute");
const vCardRoute = require("./routes/vcardRoute");
const newContactRoute = require("./routes/newContactRoute");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.use("/file", fileRoute);
app.use("/vCards", vCardRoute);
app.use("/contacts/new", newContactRoute);


app.get("/", (req, res) => {
    res.send("hey");
});


module.exports = app;


/*
Routes info:
    > to save new Contact
    POST: http://localhost:5000/contacts/new

*/