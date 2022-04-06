import Task from "../models/task.js";

// create user
const addTask = (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

// get all task
const getTasks = (req, res) => {
  Task.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

// get a task
const getTask = (req, res) => {
  const { id } = req.params;
  Task.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

// delete a user
const delTask = (req, res) => {
  const { id } = req.params;
  Task.remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

// update a user
const putTask = (req, res) => {
  const { id } = req.params;
  const { task } = req.body;
  Task.updateOne({ _id: id }, { $set: { task } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

export { addTask, getTasks, getTask, putTask, delTask };

/* const addTask = async (req, res) => {
  try {
    const task = await new Task(req.body).save();
    res.send(task);
  } catch (error) {
    res.send(error);
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.send(tasks);
  } catch (error) {
    res.send(error);
  }
};

const putTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body);
    res.send(task);
  } catch (error) {
    res.send(error);
  }
};

const delTask = async (req, res) => {
  try {
    const tasks = await Task.findByIdAndDelete(req.params.id);
    res.send(tasks);
  } catch (error) {
    res.send(error);
  }
};

const getTask = async (req, res) => {
  try {
    const tasks = await Task.findById(req.params.id);
    res.send(tasks);
  } catch (error) {
    res.send(error);
  }
};

export { addTask, getTasks, getTask, putTask, delTask }; */
