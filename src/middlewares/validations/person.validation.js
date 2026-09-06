import { body } from "express-validator";

export const createPersonValidaciones = [
    body("name")
        .notEmpty().withMessage("El nombre es requerido")
        .isLength({ min: 3 }).withMessage("El nombre debe tener al menos 3 caracteres"),
    body("lastname")
        .notEmpty().withMessage("El apellido es requerido")
        .isLength({ min: 3 }).withMessage("El apellido debe tener al menos 3 caracteres"),
];