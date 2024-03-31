import { Request as ExpressRequest, Response as ExpressResponse } from "express";
import { Request, Response } from "./Http";

export class HandlerAdapter {
  static adapt(handler: (httpRequest: Request) => Promise<Response>) {
    return async (req: ExpressRequest, res: ExpressResponse) => {
      const httpRequest = {
        body: req.body,
        params: req.params
      };
      const httpResponse = await handler(httpRequest);
      res.status(httpResponse.statusCode).json(httpResponse.body);
    };
  }
}
