import { body } from "express-validator";

export const createPersonValidaciones = [
    body("name")
        .notEmpty().withMessage("El nombre es requerido"),
    body("lastname")
        .notEmpty().withMessage("El apellido es requerido")
];