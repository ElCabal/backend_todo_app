import express from "express";
import {
  addTask,
  getTasks,
  putTask,
  delTask,
  getTask,
} from "../controllers/taskControllers.js";

const router = express.Router();
router.post("/", addTask);
router.get("/", getTasks);
router.route("/:id").put(putTask).delete(delTask).get(getTask);

export default router;
