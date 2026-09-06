import { body,param } from "express-validator";
import { UserModel } from "../../models/user.model.js";
import { PersonModel } from "../../models/person.model.js";

export const createUsuarioValidaciones = [
    body("email")
    .notEmpty().withMessage("Email es requerido")
    .isEmail().withMessage("Email debe ser válido")
    .custom(async (email) => {
    const existingUser = await UserModel.findOne({ where: { email } });
    if (existingUser) {
    throw new Error("El correo electrónico ya está registrado")
    }}),
    body("password")
    .notEmpty().withMessage("Password es requerido")
    .isLength({ min: 6 }).withMessage("Password debe tener al menos 6 caracteres"),
    body("name")
    .notEmpty().withMessage("Name es requerido")
    .isLength({ min: 3 }).withMessage("Name debe tener al menos 3 caracteres"),
    param("person_id")
        .notEmpty()
        .withMessage("El ID es requerido")
        .isInt({ min: 1 })
        .withMessage("El ID debe ser un número entero")
        .custom(async (id) => {
            const person = await PersonModel.findByPk(id);
            if (!person) {
                throw new Error("La persona no existe");
            }
            return true;
        }),
];