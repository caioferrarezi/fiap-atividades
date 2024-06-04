import type { Application } from 'express';
import { ApplicationRoutes } from "./ApplicationRoutes";
import { UsersRoutes } from "./UsersRoutes";
import { WorkHoursRouter } from "./WorkHoursRouter";

export function registerRoutes(app: Application) {
  app.use(ApplicationRoutes);
  app.use('/users', UsersRoutes);
  app.use('/workhours', WorkHoursRouter);
}
