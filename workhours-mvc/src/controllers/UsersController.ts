import type { Request, Response } from 'express';
import { User } from '../models/User';

export class UsersController {
  static async index(req: Request, res: Response) {
    const users = await User.findAll();
    res.render('users/index', { users });
  }

  static async show(req: Request, res: Response) {
    const user = await User.findById(req.params.id);
    const workHours = await user.getWorkHours();
    res.render('users/show', { user, workHours });
  }
}
