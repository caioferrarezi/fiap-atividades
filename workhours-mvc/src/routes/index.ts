import type { Application } from 'express';
import { ApplicationRoutes } from "./ApplicationRoutes";
import { UsersRoutes } from "./UsersRoutes";

export function registerRoutes(app: Application) {
  app.use(ApplicationRoutes);
  app.use('/users', UsersRoutes);
}
