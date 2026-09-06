import { Router } from 'express';
import { createUser, getAllUsers, getUserById, updateUser, deleteUser } from "../controllers/user.controller.js";
import { validate } from "../middlewares/validate.js";
import { createUsuarioValidaciones } from "../middlewares/validations/user.validation.js";

export const userRoutes = Router();

userRoutes.post("/users", createUsuarioValidaciones, validate, createUser);
userRoutes.get("/users", getAllUsers);
userRoutes.get("/users/:id", getUserById);
userRoutes.put("/users/:id", updateUser);
userRoutes.delete("/users/:id", deleteUser);

export default userRoutes;