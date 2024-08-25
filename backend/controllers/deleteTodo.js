const Todo = require("../models/Todo.js");

const createTodo = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const result = await Todo.findByIdAndDelete({_id: id});
        console.log("data deleted");
        return res.status(200).send(result);
    } catch(err) {
        console.log("delete err\n", err.message);
        return res.status(500).send(err.message);
    }
}

module.exports = createTodo;