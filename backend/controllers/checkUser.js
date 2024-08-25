const User = require("../models/User.js");

const createTodo = async (req, res) => {
    try {
        const body = req.body;
        const email = body.email;
        const password = body.password;
        const result = await User.findOne({email: email});
        // const result = await User.create({name: body.name, email: body.email, password: body.password});
        if(result) {
            if(result.password == password) {
                console.log("user signed in");
                return res.status(200).send("success");
            } else {
                return res.status(200).send("incorrect password");
            }
        } else {
            return res.status(200).send("user don't exist");
        }
    } catch(err) {
        console.log("signin err\n", err.message);
        return res.status(500).send(err.message);
    }
}

module.exports = createTodo;