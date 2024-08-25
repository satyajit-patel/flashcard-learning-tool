const Todo = require("../models/Todo.js");

const getTodos = async (req, res) => {
    try {
        // return res.status(200).send("OKAY");
        const result = await Todo.find({});
        console.log("data fetched");
        return res.status(200).send(result);
    } catch(err) {
        console.log("read err\n", err.message);
        return res.status(500).send(err.message);
    }
}

module.exports = getTodos;