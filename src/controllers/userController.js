const getUsers = async (req, res, next) => {
    res.send("GET all users")
    console.log("Get all users");
}

module.exports = {getUsers};