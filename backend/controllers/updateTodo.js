const Todo = require("../models/Todo.js");

const updateTodo = async (req, res) => {
    try {
        const id = req.params.id; // Make sure your route passes this ID
        const { quote, poet } = req.body; // Destructure properties from the request body

        // Update the Todo item
        const result = await Todo.findByIdAndUpdate(
            id, 
            { quote, poet }, 
            { new: true } // Return the updated document
        );

        if (!result) {
            return res.status(404).send("Todo not found");
        }

        console.log("Data updated");
        return res.status(200).send(result);
    } catch (err) {
        console.log("Update error\n", err.message);
        return res.status(500).send(err.message);
    }
};

module.exports = updateTodo;
