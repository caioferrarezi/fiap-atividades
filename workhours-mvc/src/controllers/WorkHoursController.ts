import { Request, Response } from 'express';
import { User } from '../models/User';
import { WorkHour } from '../models/WorkHour';

export class WorkHoursController {
  static async new(req: Request, res: Response) {
    const userId = req.query.user_id as string;

    if (userId) {
      const user = await User.findById(userId);
      return res.render('workhours/new', { user });
    }

    const users = await User.findAll();
    res.render('workhours/new', { users });
  }

  static async create(req: Request, res: Response) {
    try {
      await WorkHour.create({ userId: req.body.user_id, workDay: new Date(), startTime: req.body.start_time, endTime: req.body.end_time });
      res.redirect(`/users/${req.body.user_id}`);
    } catch (error) {
      res.status(422);
      res.redirect('/workhours/new');
    }
  }

  static async delete(req: Request, res: Response) {
    const id = req.params.id;
    const redirectPath = req.query.redirect as string;
    try {
      await WorkHour.delete(id);
      res.redirect(redirectPath);
    } catch (error) {
      res.status(422);
      res.redirect(redirectPath);
    }
  }
}
