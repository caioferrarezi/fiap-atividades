import { Router } from 'express';
import { BooksController } from '../controllers/BooksController';
import { GetBooks } from '../usecases/GetBooks';
import { GetBook } from '../usecases/GetBook';
import { CreateBook } from '../usecases/CreateBook';
import { UpdateBook } from '../usecases/UpdateBook';
import { DeleteBook } from '../usecases/DeleteBook';
import { HandlerAdapter } from '../controllers/HandlerAdapter';
import { IBookRepository } from '../repositories/BookRepository';

export function createBooksRouter(
  bookRepository: IBookRepository
) {
  const router = Router();
  const controller = new BooksController(
    new GetBooks(bookRepository),
    new GetBook(bookRepository),
    new CreateBook(bookRepository),
    new UpdateBook(bookRepository),
    new DeleteBook(bookRepository)
  );

  router
    .get('/livros', HandlerAdapter.adapt(controller.index.bind(controller)))
    .get('/livros/:id', HandlerAdapter.adapt(controller.show.bind(controller)))
    .post('/livros', HandlerAdapter.adapt(controller.create.bind(controller)))
    .put('/livros/:id', HandlerAdapter.adapt(controller.update.bind(controller)))
    .delete('/livros/:id', HandlerAdapter.adapt(controller.delete.bind(controller)))

  return router;
}

