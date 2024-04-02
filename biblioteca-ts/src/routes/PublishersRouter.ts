import { Router } from "express";
import { PublishersController } from "../controllers/PublishersController";
import { HandlerAdapter } from "../controllers/HandlerAdapter";
import { GetPublishers } from "../usecases/GetPublishers";
import { CreatePublisher } from "../usecases/CreatePublisher";
import { GetPublisher } from "../usecases/GetPublisher";
import { UpdatePublisher } from "../usecases/UpdatePublisher";
import { DeletePublisher } from "../usecases/DeletePublisher";
import { IPublisherRepository } from "../repositories/PublisherRepository";
import { GetBooksFromPublisher } from "../usecases/GetBooksFromPublisher";
import { IBookRepository } from "../repositories/BookRepository";

export function createPublishersRouter(
  bookRepository: IBookRepository,
  publisherRepository: IPublisherRepository
) {
  const router = Router();
  const controller = new PublishersController(
    new GetPublishers(publisherRepository),
    new GetPublisher(publisherRepository),
    new CreatePublisher(publisherRepository),
    new UpdatePublisher(publisherRepository),
    new DeletePublisher(publisherRepository),
    new GetBooksFromPublisher(bookRepository)
  );

  router
    .get('/editoras', HandlerAdapter.adapt(controller.index.bind(controller)))
    .get('/editoras/:id', HandlerAdapter.adapt(controller.show.bind(controller)))
    .get('/editoras/:id/livros', HandlerAdapter.adapt(controller.books.bind(controller)))
    .post('/editoras', HandlerAdapter.adapt(controller.create.bind(controller)))
    .put('/editoras/:id', HandlerAdapter.adapt(controller.update.bind(controller)))
    .delete('/editoras/:id', HandlerAdapter.adapt(controller.delete.bind(controller)));

  return router;
}
