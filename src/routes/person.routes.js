import { Router } from "express";
import { createPerson, deletePerson } from "../controllers/person.controller.js";
import { validate } from "../middlewares/validate.js";
import { createPersonValidaciones } from "../middlewares/validations/person.validation.js";

export const personRouter = Router();

personRouter.post("/people", createPersonValidaciones, validate, createPerson);
personRouter.delete("/people/:id", deletePerson);


export default personRouter;