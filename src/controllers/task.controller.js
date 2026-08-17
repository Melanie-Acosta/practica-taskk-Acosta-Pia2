import { TaskModel } from "../models/task.model.js";
console.log("Verificacion Modelo:", TaskModel);

export const createTask = async (req, res) => {
    try {
        const { title, description, isComplete } = req.body;
        if (!title) {
            return res.status(400).json({ message: "El titulo no puede estar vacío" });
        }
        console.log("createTask - Data;:", { title, description, isComplete });

const task = await TaskModel.create({ title, description, isComplete });
        res.status(201).json(task);
    } catch (error) {
        console.error("Error al crear el usuario:", error);
       return res.status(500).json({ message: "Error interno del servidor" });
    }
};

export const getAllTasks = async (req, res) => {
    try {
        const tasks = await TaskModel.findAll();
        return res.status(200).json(tasks);
    } catch (error) {
        console.log("Error al obtener las tareas",error);
       return res.status(500).json({ message: "Error interno del servidor" });
    }
};

export const getTaskById = async (req, res) => {
    try {
        const task = await TaskModel.findByPk(req.params.id);
        if(!task) {
        return res.status(200).json({ message: "Tarea no encontrada correctamente" });
    } return res.status(200).json(task);
}   catch (error) {
        console.error("Error al obtener la tarea", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

export const updateTask = async (req, res) => {
    try {
        const task = await TaskModel.findByPk(req.params.id);
        if (!task) {
        return res.status(404).json({ message: "Tarea no encontrada" });
    }
    const { title, description, isComplete } = req.body;
    await  task.update ({ title, description, isComplete});
    return res.status(200).json(task);
    } catch (error) {
        console.log("Error al actualizar la tarea", error);
        return res.status(500).json({ messaje: "Error interno del servidor"}); }
    }


export const deleteTask = async (req, res) => {
    try {
        const task = await TaskModel.findByPk(req.params.id);
        if (!task) { 
            return res.status(404).json({ message: "Tarea no encontrada" });
        } 
        await task.destroy();
        return res.status(200).json({ message: "Tarea eliminada correctamente" });
    } catch (error) {
        console.error("Error al eliminar la tarea:", error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};