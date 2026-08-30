import { TaskModel } from "../models/task.model.js";
console.log("Verificacion Modelo:", TaskModel);

export const createTask = async (req, res) => {
    try {
    const { title, description, isComplete } = req.body;
    const task = await TaskModel.create({ title, description, isComplete });
    return res.status(201).json(task);
    } catch (error) {
    console.error("Error al crear la tarea:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
    }
};

export const getAllTasks = async (req, res) => {
    try {
    const tasks = await TaskModel.findAll();
    return res.status(200).json(tasks);
    } catch (error) {
    console.error("Error al obtener las tareas:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
    }
};

export const getTaskById = async (req, res) => {
    try {
    const { id } = req.params;
    const task = await TaskModel.findByPk(id);
    return res.status(200).json(task);
    } catch (error) {
    console.error("Error al obtener la tarea:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
    }
};

export const updateTask = async (req, res) => {
    try {
    const { id } = req.params;
    const { title, description, isComplete } = req.body;

    await TaskModel.update(
    { title, description, isComplete },
    { where: { id } }
    );

    return res.status(200).json({ message: "Tarea actualizada correctamente" });
    } catch (error) {
    console.error("Error al actualizar la tarea:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
    }
};

export const deleteTask = async (req, res) => {
    try {
    const { id } = req.params;
    await TaskModel.destroy({ where: { id } });

    return res.status(200).json({ message: "Tarea eliminada correctamente" });
    } catch (error) {
    console.error("Error al eliminar la tarea:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
    }
};