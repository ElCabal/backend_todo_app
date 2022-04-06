import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  task: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  timestamp: {
    type: String,
    default: Date.now(),
  },
});

const Task = mongoose.model("Task", taskSchema);
export default Task;
