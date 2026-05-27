
class UploadError extends Error {
    constructor(message, statusCode){
        super(message);

        this.name = "UploadError";
        this.statusCode = statusCode;
    }
}

const vCardsMemory = [];

module.exports = { UploadError, vCardsMemory };