import { UserModel } from "../models/user.model.js";

console.log("Verificacion Modelo:", UserModel);

export const createUser = async (req, res) => {
    try {
        const { name, email, password, person_id } = req.body;

        if (!name) {
            return res.status(400).json({ message: "El nombre no puede estar vacío" });
        }
        console.log("createUser - Data;:", { name, email, password, person_id });

const user = await UserModel.create({ name, email, password, person_id });
        res.status(201).json(user);
    } catch (error) {
        console.error("Error al crear el usuario:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

export const getAllUsers = async (req, res) => {
    try {
        return res.status(200).json({ message: "Usuarios obtenidos correctamente" });
    } catch (error) {
        console.log("Error");
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

export const getUserById = async (req, res) => {
    try {
        return res.status(200).json({ message: "Usuario obtenido por id correctamente" });
    } catch (error) {
        console.log("Error");
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

export const updateUser = async (req, res) => {
    try {
        return res.status(200).json({ message: "Usuario actualizado corretamente" });
    } catch (error) {
        console.log("Error")
        return res.status(500).json({ messaje: "Error interno del servidor "})
    }
};

export const deleteUser = async (req, res) => {
    try {
        return res.status(200).json({ message: "Usuario eliminado correctamente" })
    } catch (error) {
        console.log("Error");
        return res.status(500).json({ message: "Error interno del servidor" });
    }
}


