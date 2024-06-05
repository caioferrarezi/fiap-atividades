import { Router } from 'express';
import { UsersController } from '../controllers/UsersController';

export const UsersRoutes = Router();

UsersRoutes.get('/', UsersController.index);
UsersRoutes.post('/', UsersController.create);
UsersRoutes.get('/new', UsersController.new);
UsersRoutes.get('/:id', UsersController.show);
UsersRoutes.put('/:id', UsersController.update);
UsersRoutes.delete('/:id', UsersController.delete);
UsersRoutes.get('/:id/edit', UsersController.edit);
