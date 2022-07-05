const mongoose = require("mongoose");
const { Schema } = mongoose;
const Todo = require("../Models/todos")

//Add a Todo task to a Todo collection 
exports.addTodo = async (req, res,) => {
    try {
        const todo = new Todo(
            {
                _id: new mongoose.Types.ObjectId(),
                title: req.body.title,
                description: req.body.description,
                created: req.body.created
            });
        todo.save();
        res.status(201).json(
            {
                message: "todo added",
                todo
            });

        console.log(todo);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

//Update a Todo task in the collection
exports.updateTodo = async (req, res) => {

    const id = mongoose.Types.ObjectId(req.params.id);
    return Todo.findByIdAndUpdate(id,
        {
            title: req.body.title,
            description: req.body.description
        },
        { new: true })
        .then(result => res.status(200).json({
            message: "Todo Updated",
            result
        }))
        .catch(err => res.status(500).json({ message: err.message }))
    // console.log(updates);

};

//Delete a Todo from the collecction
exports.deleteTodo = (req, res) => {
    const id = req.params.id;
    return Todo.remove({ _id: id })
        .exec()
        .then(result => {
            console.log("todo deleted")
            res.status(200).json({
                message: "Todo deleted",
                result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};

//Get all Todos in the collection
exports.getTodos = (req, res,) => {
    return Todo.find()
        .exec()
        .then(todos => {
            console.log(todos);
            res.status(200).json(todos);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                errror: err
            });
        });
};

