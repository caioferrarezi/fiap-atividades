import { Request, Response } from 'express';

export class ApplicationController {
  static show(req: Request, res: Response) {
    res.redirect('/users');
  }
}
