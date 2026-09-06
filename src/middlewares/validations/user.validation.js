import { body } from "express-validator";

export const createUsuarioValidaciones = [
    body("email")
    .notEmpty().withMessage("Email es requerido")
    .isEmail().withMessage("Email debe ser válido"),
    body("password")
    .notEmpty().withMessage("Password es requerido")
    .isLength({ min: 6 }).withMessage("Password debe tener al menos 6 caracteres"),
    body("name")
    .notEmpty().withMessage("Name es requerido")
    .isLength({ min: 3 }).withMessage("Name debe tener al menos 3 caracteres"),
];