const { Schema, model } = require("mongoose");

const toDoSchema = new Schema({
  title: String,  
  completed: Boolean,
  categories: Array,
  dueDate: String
});

module.exports = model("ToDo", toDoSchema, "todo-list");