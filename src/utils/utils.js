
class UploadError extends Error {
    constructor(message, statusCode){
        super(message);

        this.name = "UploadError";
        this.statusCode = statusCode;
    }
}

module.exports = { UploadError };