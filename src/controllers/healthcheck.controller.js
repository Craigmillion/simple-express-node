const handleHealthcheck = async(req, res) => {
    return res.status(200).send("OK");
}

module.exports = {
    handleHealthcheck
}