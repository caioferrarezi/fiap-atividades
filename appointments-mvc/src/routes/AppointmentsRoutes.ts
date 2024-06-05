import { Router } from "express";
import { AppointmentsController } from "../controllers/AppointmentsController";

export const AppointmentsRouter = Router();

AppointmentsRouter.post("/", AppointmentsController.create);
AppointmentsRouter.get("/new", AppointmentsController.new);
AppointmentsRouter.get("/:id", AppointmentsController.edit);
AppointmentsRouter.put("/:id", AppointmentsController.update);
AppointmentsRouter.delete("/:id", AppointmentsController.delete);
