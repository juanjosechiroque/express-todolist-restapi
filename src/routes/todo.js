const express = require("express");
const router = express.Router();

const Todo = require("../models/todo.js");

router.get("/", async (req,res) => {
  
  const todo = await Todo.find();
  
  res.send(todo);
  
});

router.post("/", (req,res) => {  
  
  console.log(req.body);
  
  const { title, completed } = req.body;
  
  const newTodo = new Todo({
    title,
    completed
  });
  
  newTodo.save();
  
  res.send("post");
});

router.put("/:todoId", async (req,res) => {
  
  const { todoId } = req.params;
  console.log("id", todoId);
  console.log("body", req.body);
  
  const result = await Todo.update( { _id: todoId } , req.body );
  
  res.send("put");
  
});

router.delete("/:todoId", async (req,res) => {
  
  const { todoId } = req.params;
  
  const result = await Todo.findByIdAndDelete(todoId);  
  
  res.send("delete");
});

module.exports = router;