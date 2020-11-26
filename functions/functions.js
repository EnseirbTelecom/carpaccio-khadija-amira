module.exports = {
    getId: (req, res) => {
        res.status(200).json({
            "id": "carpaccio-khadija-amira"
        });
    }
}