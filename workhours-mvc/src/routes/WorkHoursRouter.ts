import { Router } from "express";
import { WorkHoursController } from "../controllers/WorkHoursController";

export const WorkHoursRouter = Router();

WorkHoursRouter.post("/", WorkHoursController.create);
WorkHoursRouter.get("/new", WorkHoursController.new);
WorkHoursRouter.delete("/:id", WorkHoursController.delete);
