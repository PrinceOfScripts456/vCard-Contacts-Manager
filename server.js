require("dotenv").config();
const connectDB = require("./src/config/db");

(async () => {

    await connectDB();

    const app = require("./src/app");

    const PORT = process.env.PORT || 8080;

    app.listen(PORT, () => {
        console.log(`server is listening on 'http://localhost:${PORT}'`);
    });

})()
