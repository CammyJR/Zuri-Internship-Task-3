const mongoose = require("mongoose");
const {Schema} = mongoose;
const Todo = require("../Models/todos")

//Add a Todo task to a Todo collection 
exports.addTodo = async(req,res,)=>{
    try{
        const {title, description} = await req.body;
        const todo = new Todo(
        {
            _id: new mongoose.Types.ObjectId(),
            title: req.body.title,
            description: req.body.description,
            created: req.body.timetamp
        });
        todo.save();
        res.status(201).json(
        {
            message: "todo added",
            todo
        });

        console.log(todo);
    }catch(err){
        res.status(500).json({message: err.message});
    }
};

//Update a Todo task in the collection
exports.updateTodo = async(req,res)=>{
    try{
        let id = req.param.id;
        const {title,description} = await req.body; 
        Todo.findByIdAndUpdate(id,
            {
                title: req.body.title,
                description: req.body.title
            },
            function(err,docs){
                if(err){
                    console.log(err)
                }else{
                    console.log("Todo Updated: ", docs,req.body.title);
                    res.status(200).json(docs);
                }
            });
    }catch(err){
        res.status(500).json({message:err.message})
    }
};

//Delete a Todo from the collecction
exports.deleteTodo = async(req,res) => {
    const id = req.params.id;
    Todo.remove({_id:id})
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
exports.getTodos = async(req,res,next)=>{
    Todo.find()
        .exec()
        .then(todos => {
            console.log(todos);
            res.status(200).json(todos);
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({
                errror: err
            });
        });
};

