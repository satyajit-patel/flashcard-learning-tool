const User = require("../models/User.js");

const createTodo = async (req, res) => {
    try {
        const body = req.body;
        const result = await User.create({name: body.name, email: body.email, password: body.password});
        console.log("user signed up");
        return res.status(200).send(result);
    } catch(err) {
        console.log("signup err\n", err.message);
        return res.status(500).send(err.message);
    }
}

module.exports = createTodo;