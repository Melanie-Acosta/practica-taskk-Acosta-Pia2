import { PersonModel } from "../models/person.model.js";
import TaskModel from "../models/task.model.js";
import { UserModel } from "../models/user.model.js";

console.log("Verificacion Modelo:", TaskModel);

//modelo de tareas.
export const createTask = async (req, res) => {
    try {
        const { title, description,is_completed, user_id } = req.body;
        if (!user_id) {
            return res.status(400).json({ message: "No se puede crear una tarea sin asignar un usuario" });
        }

const task = await TaskModel.create({ title, description, is_completed, user_id });
        res.status(201).json(task);
    } catch (error) {
        console.error("Error al crear el usuario:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
    }
};

export const getAllTasks = async (req, res) => {
    try {
    const tasks = await TaskModel.findAll({
    include: [
        {
        model: UserModel,
          as: "author", // Debe coincidir exactamente con el alias de la relación
        include: [
            {
                model: PersonModel,
                as: "owner",
            }
        ]
        }
    ]
    });
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
        return res.status(404).json({ message: "Tarea no encontrada correctamente" });
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
    const { title, description, is_completed, user_id } = req.body;
    await  task.update ({ title, description, is_completed, user_id});
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