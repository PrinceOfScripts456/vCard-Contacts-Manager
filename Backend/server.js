require("dotenv").config();
const app = require("./src/app");

const connectDB = require("./src/config/db");

connectDB();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`server is listening on 'http://localhost:${PORT}'`);
});