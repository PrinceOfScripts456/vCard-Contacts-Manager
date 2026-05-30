
function validateRecievedvCard(req, res, next) {

    if (Object.keys(req.body).length === 0) {
        console.log(" fun(): empty vCard rejected.");

        return res.json({
            message: "invalid or empty vCard was sent and rejected."
        });

    }

    console.log(" fun(): vCard is valid, proceeding..");
    next();
}

module.exports = { validateRecievedvCard };