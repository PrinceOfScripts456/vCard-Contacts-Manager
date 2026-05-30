
class UploadError extends Error {
    constructor(message, statusCode) {
        super(message);

        this.name = "UploadError";
        this.statusCode = statusCode;
    }
}


function formatDate(date) { // expected format 2026-05-30T07:37:50.156Z

    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    if (date.length === 10) { // for 2026-05-30 only

        const [year, month, day] = date.split("-");

        return `${day}-${months[parseInt(month) - 1]}-${year}`;

    }

    return date;
}


function convertToISO(dateStr) {

    const months = {
        Jan: "01", Feb: "02", Mar: "03", Apr: "04",
        May: "05", Jun: "06", Jul: "07", Aug: "08",
        Sep: "09", Oct: "10", Nov: "11", Dec: "12",
    };

    if (dateStr.length === 11) { // 03-Mar-2008
        const [day, mon, year] = dateStr.split("-");

        return `${year}-${months[mon]}-${day.padStart(2, "0")}`;
    }

    return dateStr;
}

module.exports = { UploadError, formatDate, convertToISO };
