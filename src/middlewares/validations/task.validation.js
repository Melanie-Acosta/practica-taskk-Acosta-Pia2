import { body, param } from "express-validator";
import { TaskModel } from "../../models/task.model.js";
import { UserModel } from "../../models/user.model.js";

export const createTaskValidaciones = [
    param("user_id")
    .isInt({ min: 1 }).withMessage("El ID del usuario debe ser un número entero positivo")
    .custom(async (user_id) => {
    const user = await UserModel.findByPk(user_id);
    if (!user) {
        throw new Error("El usuario no existe en la base de datos");
    }
    return true;
    }),
    body("title")
    .trim()
    .notEmpty().withMessage("El título es requerido")
    .isLength({ min: 3, max: 50 }).withMessage("El título debe tener entre 3 y 50 caracteres")
    .custom(async (title, { req }) => {
    const userId = req.params.user_id;
    const taskExistente = await TaskModel.findOne({ 
        where: { title, user_id: userId } 
    });
    if (taskExistente) {
    throw new Error("Ya existe una tarea registrada con ese mismo título para este usuario");
    }
    return true;
    }),
    body("description")
    .trim()
    .notEmpty().withMessage("La descripción es requerida")
    .isLength({ min: 5, max: 100 }).withMessage("La descripción debe tener entre 5 y 100 caracteres"),
    body("is_completed")
    .optional()
    .isBoolean().withMessage("El campo is_completed debe ser un valor booleano (true/false)")
];

export const updateTaskValidaciones = [
    body("title")
    .optional()
    .trim()
    .isLength({ min: 3, max: 50 })
    .withMessage("El título debe tener entre 3 y 50 caracteres"),
    body("description")
    .optional()
    .trim()
    .isLength({ min: 5, max: 100 })
    .withMessage("La descripción debe tener entre 5 y 100 caracteres"),
    body("is_completed")
    .optional()
    .isBoolean()
    .withMessage("El campo is_completed debe ser un valor booleano (true/false)"),
    param("user_id")
    .isInt({ min: 1 })
    .withMessage("El ID del usuario debe ser un número entero positivo")
    .custom(async (user_id) => {
    const user = await UserModel.findByPk(user_id); 
    if (!user) {
        throw new Error("El usuario no existe en la base de datos");
    }  
    return true;
    }),
];

export const getTaskByIdValidaciones = [
    param("id")
    .isInt({ min: 1 })
    .withMessage("El ID de la tarea debe ser un número entero positivo")
];

export const deleteTaskValidaciones = [
    param("id")
    .isInt({ min: 1 })
    .withMessage("El ID de la tarea un numeor positivo")
];
