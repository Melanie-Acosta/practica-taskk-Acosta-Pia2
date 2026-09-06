import { Router } from "express";
import { createPerson } from "../controllers/person.controller.js";
import { validate } from "../middlewares/validate.js";
import { createPersonValidaciones } from "../middlewares/validations/person.validation.js";

export const personRouter = Router();

personRouter.post("/people", createPersonValidaciones, validate, createPerson);
//personRouter.get("/", getAllPeople);

export default personRouter;