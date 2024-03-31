import { Router } from 'express';
import { BooksController } from '../controllers/BooksController';
import { BookRepositoryMemory } from '../repositories/BookRepositoryMemory';
import { GetBooks } from '../usecases/GetBooks';
import { GetBook } from '../usecases/GetBook';
import { CreateBook } from '../usecases/CreateBook';
import { UpdateBook } from '../usecases/UpdateBook';
import { DeleteBook } from '../usecases/DeleteBook';
import { HandlerAdapter } from '../controllers/HandlerAdapter';

const router = Router();
const bookRepository = new BookRepositoryMemory();
const booksController = new BooksController(
  new GetBooks(bookRepository),
  new GetBook(bookRepository),
  new CreateBook(bookRepository),
  new UpdateBook(bookRepository),
  new DeleteBook(bookRepository)
);

router
  .get('/livros', HandlerAdapter.adapt(booksController.index.bind(booksController)))
  .get('/livros/:id', HandlerAdapter.adapt(booksController.show.bind(booksController)))
  .post('/livros', HandlerAdapter.adapt(booksController.create.bind(booksController)))
  .put('/livros/:id', HandlerAdapter.adapt(booksController.update.bind(booksController)))
  .delete('/livros/:id', HandlerAdapter.adapt(booksController.delete.bind(booksController)))

export default router;
