import { Router } from "express";
import { createPerson } from "../controllers/person.controller.js";

export const personRouter = Router();

personRouter.post("/people", createPerson);
//personRouter.get("/", getAllPeople);

export default personRouter;