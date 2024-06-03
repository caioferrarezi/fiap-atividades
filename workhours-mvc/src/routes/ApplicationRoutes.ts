import { Router } from 'express';

export const ApplicationRoutes = Router();

ApplicationRoutes.get('/', (req, res) => {
  res.redirect('/users');
});
