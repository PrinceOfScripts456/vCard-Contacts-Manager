
function validateRecievedvCard(req, res, next) {

    if (Object.keys(req.body).length === 0) {
        console.log(" fun(): invalid vCard rejected.");
        return res.send([{
            message: "invalid or empty vCard was sent and rejected."
        }]);
    }
    console.log(" fun(): vCard is valid, proceeding..");
    next();
}

module.exports = { validateRecievedvCard };