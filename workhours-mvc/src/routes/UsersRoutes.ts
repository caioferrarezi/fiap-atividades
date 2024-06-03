import { Router } from 'express';
import { UsersController } from '../controllers/UsersController';

export const UsersRoutes = Router();

UsersRoutes.get('/', UsersController.index);
UsersRoutes.get('/:id', UsersController.show);
