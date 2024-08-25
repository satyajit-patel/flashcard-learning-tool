const User = require("../models/User.js");

const getTodos = async (req, res) => {
    try {
        const result = await User.find({});
        console.log("user fetched");
        return res.status(200).send(result);
    } catch(err) {
        console.log("read err\n", err.message);
        return res.status(500).send(err.message);
    }
}

module.exports = getTodos;