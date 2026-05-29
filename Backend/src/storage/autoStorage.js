const memory = require("./memoryStorage");
const mongo = require("./mongoStorage");

const mongoose = require("mongoose");

function isMongoReady() {
    return mongoose.connection.readyState === 1;
}

function storage() {
    if (isMongoReady()) {

        console.log(" fun(): MongoDB is available, so it will be used.");
        return mongo;
    }
    else {
        console.log(" fun(): MongoDB is NOT available, so RAM will be used.");
        return memory;
    }
}

module.exports = storage;