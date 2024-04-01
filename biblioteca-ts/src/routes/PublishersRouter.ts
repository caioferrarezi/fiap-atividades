import { Router } from "express";
import { PublishersController } from "../controllers/PublishersController";
import { HandlerAdapter } from "../controllers/HandlerAdapter";
import { PublisherRepositoryMemory } from "../repositories/PublisherRepositoryMemory";
import { GetPublishers } from "../usecases/GetPublishers";
import { CreatePublisher } from "../usecases/CreatePublisher";
import { GetPublisher } from "../usecases/GetPublisher";
import { UpdatePublisher } from "../usecases/UpdatePublisher";
import { DeletePublisher } from "../usecases/DeletePublisher";

const router = Router();
const publisherRepository = new PublisherRepositoryMemory();
const controller = new PublishersController(
  new GetPublishers(publisherRepository),
  new GetPublisher(publisherRepository),
  new CreatePublisher(publisherRepository),
  new UpdatePublisher(publisherRepository),
  new DeletePublisher(publisherRepository),
);

router
  .get('/editoras', HandlerAdapter.adapt(controller.index.bind(controller)))
  .get('/editoras/:id', HandlerAdapter.adapt(controller.show.bind(controller)))
  .post('/editoras', HandlerAdapter.adapt(controller.create.bind(controller)))
  .put('/editoras/:id', HandlerAdapter.adapt(controller.update.bind(controller)))
  .delete('/editoras/:id', HandlerAdapter.adapt(controller.delete.bind(controller)));

export default router;
