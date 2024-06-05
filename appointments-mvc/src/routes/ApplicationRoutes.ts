import { Router } from 'express';
import { ApplicationController } from '../controllers/ApplicationController';

export const ApplicationRoutes = Router();

ApplicationRoutes.get('/', ApplicationController.show);
