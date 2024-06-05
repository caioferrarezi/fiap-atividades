import { Request, Response } from 'express';
import { User } from '../models/User';
import { Appointment } from '../models/Appointment';
import { DateHelper } from '../helpers/DateHelper';

export class AppointmentsController {
  static async new(req: Request, res: Response) {
    const userId = req.query.user_id as string;

    if (userId) {
      const user = await User.findById(userId);
      return res.render('appointments/new', { user });
    }

    const users = await User.findAll();
    res.render('appointments/new', { users });
  }

  static async edit(req: Request, res: Response) {
    const id = req.params.id;
    const appointment = await Appointment.findById(id);
    const user = await appointment.getUser();
    res.render('appointments/edit', { appointment, user });
  }

  static async create(req: Request, res: Response) {
    try {
      await Appointment.create({
        userId: req.body.user_id,
        workDay: DateHelper.parse(req.body.work_day),
        startTime: req.body.start_time,
        endTime: req.body.end_time
      });
      req.flash('success', 'Apontamento criado com sucesso!');
      res.redirect(`/users/${req.body.user_id}`);
    } catch (error) {
      req.flash('error', 'Erro ao criar apontamento, tente novamente!');
      res.redirect('/appointments/new');
    }
  }

  static async update(req: Request, res: Response) {
    const id = req.params.id;
    try {
      await Appointment.update(id, {
        userId: req.body.user_id,
        workDay: DateHelper.parse(req.body.date),
        startTime: req.body.start_time,
        endTime: req.body.end_time
      });
      req.flash('success', 'Apontamento editado com sucesso!');
      res.redirect(`/users/${req.body.user_id}`);
    } catch (error) {
      console.log(error)
      req.flash('error', 'Erro ao atualizar apontamento, tente novamente!');
      res.redirect(`/appointments/${id}`);
    }
  }

  static async delete(req: Request, res: Response) {
    const id = req.params.id;
    const redirectPath = req.query.redirect as string;
    try {
      await Appointment.delete(id);
      req.flash('info', 'Apontamento excluído!');
      res.redirect(redirectPath);
    } catch (error) {
      req.flash('error', 'Erro ao excluir apontamento, tente novamente!');
      res.redirect(redirectPath);
    }
  }
}
