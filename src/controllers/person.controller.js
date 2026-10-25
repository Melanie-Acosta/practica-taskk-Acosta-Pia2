import { PersonModel } from "../models/person.model.js";
import { UserModel } from "../models/user.model.js";

export const createPerson = async (req, res) => {
  console.log("body recibido", req.body); 
  try {
    const { name, lastname } = req.body;

    if (!name) {
    return res.status(400).json({ message: "El nombre no puede estar vacio" });
    }

    const person = await PersonModel.create({ name, LastName: lastname });
    return res.status(201).json(person);
    } catch (error) {
    console.error("Error al crear la persona:", error);
    return res.status(500).json({ message: "Error interno del servidor", error: error.message });
    }
};

export const getAllPeople = async (req, res) => {
    try {
    const people = await PersonModel.findAll();
    return res.status(200).json(people);
    } catch (error) {
    console.error("Error al obtener las personas:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
    }
};

export const deletePerson = async (req, res) => {
    try {
    const { id } = req.params;

    const deleted = await PersonModel.destroy({
    where: { id }
    });

    if (!deleted) {
    return res.status(404).json({ message: "Persona no encontrada" });
    }

    return res.status(200).json({ message: "Persona eliminada correctamente" });
    } catch (error) {
    console.error("Error al eliminar la persona:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
    }
};

