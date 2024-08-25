const Todo = require("../models/Todo.js");

const createTodo = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const result = await Todo.findByIdAndUpdate({_id: id}, {quote: body.quote, poet: body.poet});

        console.log("data updated");
        return res.status(200).send(result);
    } catch(err) {
        console.log("update err\n", err.message);
        return res.status(500).send(err.message);
    }
}

module.exports = createTodo;