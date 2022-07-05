const express = require("express");
const router = express.Router();

const controller = require("../controllers/controller");

router
.get('/', controller.addTodo)
.post('/', controller.getTodos)
.put('/:id',controller.updateTodo)
.delete('/:id',controller.deleteTodo);

module.exports = router;




