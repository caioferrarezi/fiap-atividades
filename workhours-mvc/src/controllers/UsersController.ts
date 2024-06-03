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

  static async new(req: Request, res: Response) {
    res.render('users/new');
  }

  static async create(req: Request, res: Response) {
    try {
      await User.create({ name: req.body.name, email: req.body.email });
      res.redirect('/users');
    } catch (error) {
      res.status(422);
      res.redirect('/users/new');
    }
  }

  static async edit(req: Request, res: Response) {
    const user = await User.findById(req.params.id);
    res.render('users/edit', { user });
  }

  static async update(req: Request, res: Response) {
    const id = req.params.id;
    const { name, email } = req.body;

    try {
      await User.update(id, { name, email });
      res.redirect(`/users/${id}`);
    } catch (error) {
      res.status(422);
      res.redirect(`/users/${id}/edit`);
    }
  }

  static async delete(req: Request, res: Response) {
    const id = req.params.id;
    try {
      await User.delete(id);
      res.redirect('/users');
    } catch (error) {
      res.status(422);
      res.redirect(`/users/${id}/edit`);
    }
  }
}
