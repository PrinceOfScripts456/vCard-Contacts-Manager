const mongoose = require("mongoose");

const memory = require("./memoryStorage");
const mongo = require("./mongoStorage");


function isMongoReady() {
    return mongoose.connection.readyState === 1;
}

function storage() {
    if (isMongoReady()) {

        console.log(" fun(): MongoDB is available and being used.");
        return mongo;
    }
    else {
        console.log(" fun(): MongoDB is NOT available, so RAM will be used.");
        return memory;
    }
}

module.exports = storage();