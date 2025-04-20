const handleTest = async(req, res) => {
    return res.status(200).send("You have reached ceylon road");
}

module.exports = {
    handleTest
}