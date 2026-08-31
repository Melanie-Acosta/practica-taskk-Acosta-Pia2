import { PersonModel } from "../models/person.model.js";

export const createPerson = async (req, res) => {
  try {
    const { name, LastName } = req.body;

    if (!name || !LastName) {
    return res.status(400).json({ message: "El nombre y apellido son obligatorios" });
    }

    const person = await PersonModel.create({ name, LastName });
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