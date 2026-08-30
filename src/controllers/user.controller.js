import { UserModel } from "../models/user.model.js";
console.log("Verificacion Modelo:", UserModel);

export const createUser = async (req, res) => {
    try {
    const { name, email, password } = req.body;
    const user = await UserModel.create({ name, email, password });
    return res.status(201).json(user);
    } catch (error) {
    console.error("Error al crear el usuario:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
    }
};

export const getAllUsers = async (req, res) => {
    try {
    const users = await UserModel.findAll();
    return res.status(200).json(users);
    } catch (error) {
    console.error("Error al obtener usuarios:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
    }
};

export const getUserById = async (req, res) => {
    try {
    const { id } = req.params;
    const user = await UserModel.findByPk(id);
    return res.status(200).json(user);
    } catch (error) {
    console.error("Error al obtener el usuario:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
    }
};

export const updateUser = async (req, res) => {
    try {
    const { id } = req.params;
    const { name, email, password } = req.body;

    await UserModel.update({ name, email, password }, { where: { id } });

    return res.status(200).json({ message: "Usuario actualizado correctamente" });
    } catch (error) {
    console.error("Error al actualizar el usuario:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
    }
};

export const deleteUser = async (req, res) => {
    try {
    const { id } = req.params;
    await UserModel.destroy({ where: { id } });

    return res.status(200).json({ message: "Usuario eliminado correctamente" });
    } catch (error) {
    console.error("Error al eliminar el usuario:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
    }
};