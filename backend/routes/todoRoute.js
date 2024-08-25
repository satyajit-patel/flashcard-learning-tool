const express = require("express");
const router = express.Router();

const getTodos = require("../controllers/getTodos.js");
const createTodo = require("../controllers/createTodo.js");
const updateTodo = require("../controllers/updateTodo.js");
const deleteTodo = require("../controllers/deleteTodo.js");

router.get("/todos", getTodos);
router.post("/todos", createTodo);
router.patch("/todos/:id", updateTodo);
router.delete("/todos/:id", deleteTodo);

module.exports = router;