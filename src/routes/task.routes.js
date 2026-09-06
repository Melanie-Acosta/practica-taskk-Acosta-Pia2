import { Router } from 'express';
import { createTask, getAllTasks, getTaskById, updateTask, deleteTask } from "../controllers/task.controller.js";
import { createTaskValidaciones } from "../middlewares/validations/task.validation.js";
import { validate } from "../middlewares/validate.js";

export const taskRouter = Router();

taskRouter.post("/users/:user_id/tasks", createTaskValidaciones, validate, createTask);
taskRouter.get("/tasks", getAllTasks);
taskRouter.get("/tasks/:id", getTaskById);
taskRouter.put("/tasks/:id", updateTask);
taskRouter.delete("/tasks/:id", deleteTask);

export default taskRouter;