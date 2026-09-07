import { Router } from 'express';
import { createTask, getAllTasks, getTaskById, updateTask, deleteTask } from "../controllers/task.controller.js";

import { createTaskValidaciones,
    updateTaskValidaciones, 
    getTaskByIdValidaciones, 
    deleteTaskValidaciones } from "../middlewares/validations/task.validation.js";
import { validate } from "../middlewares/validate.js";

export const taskRouter = Router();

taskRouter.post("/users/:user_id/tasks", createTaskValidaciones, validate, createTask);
taskRouter.get("/tasks", getAllTasks);
taskRouter.get("/tasks/:id", getTaskByIdValidaciones, validate, getTaskById);
taskRouter.put("/tasks/:id", updateTaskValidaciones, validate, updateTask);
taskRouter.delete("/tasks/:id", deleteTaskValidaciones, validate, deleteTask);

export default taskRouter;