const Todo = require("../models/Todo.js");

const createTodo = async (req, res) => {
    try {
        const body = req.body;
        const result = await Todo.create({quote: body.quote, poet: body.poet});
        console.log("data created");
        return res.status(200).send(result);
    } catch(err) {
        console.log("create err\n", err.message);
        return res.status(500).send(err.message);
    }
}

module.exports = createTodo;