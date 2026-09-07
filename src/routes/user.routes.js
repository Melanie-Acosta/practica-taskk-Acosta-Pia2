import { Router } from 'express';
import { createUser, getAllUsers, getUserById, updateUser, deleteUser } from "../controllers/user.controller.js";
import { validate } from "../middlewares/validate.js";

import { 
    createUsuarioValidaciones,
    updateUsuarioValidaciones,
    getUsuarioByIdValidaciones,
    deleteUsuarioValidaciones 
} from "../middlewares/validations/user.validation.js";

export const userRoutes = Router();

userRoutes.post("/users/:person_id", createUsuarioValidaciones, validate, createUser);
userRoutes.get("/users", getAllUsers);
userRoutes.get("/users/:person_id", getUsuarioByIdValidaciones, validate, getUserById);
userRoutes.put("/users/:person_id", updateUsuarioValidaciones, validate, updateUser);
userRoutes.delete("/users/:person_id", deleteUsuarioValidaciones, validate, deleteUser);

export default userRoutes;