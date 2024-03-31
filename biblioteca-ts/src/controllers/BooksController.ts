import { CreateBook } from '../usecases/CreateBook';
import { DeleteBook } from '../usecases/DeleteBook';
import { GetBook } from '../usecases/GetBook';
import { GetBooks } from '../usecases/GetBooks';
import { UpdateBook } from '../usecases/UpdateBook';
import { Request, Response, HttpResponse } from './Http';

export class BooksController {
  constructor(
    private readonly getBooks: GetBooks,
    private readonly getBook: GetBook,
    private readonly createBook: CreateBook,
    private readonly updateBook: UpdateBook,
    private readonly deleteBook: DeleteBook
  ) {}

  async index(): Promise<Response> {
    const output = this.getBooks.execute();
    const books = output.books.map(book => ({
      id: book.id,
      titulo: book.title,
      autor: book.author,
      isbn: book.isbn,
      publisher_id: book.publisherId,
      published_at: book.publishedAt
    }));
    return HttpResponse.ok(books);
  }

  async show(httpRequest: Request): Promise<Response> {
    const output = this.getBook.execute({ id: httpRequest.params.id });
    if (!output.book) {
      return HttpResponse.notFound('Book not found');
    }
    const book = output.book;
    return HttpResponse.ok({
      id: book.id,
      title: book.title,
      author: book.author,
      isbn: book.isbn,
      publisher_id: book.publisherId,
      published_at: book.publishedAt
    });
  }

  async create(httpRequest: Request): Promise<Response> {
    const output = this.createBook.execute({
      title: httpRequest.body.title,
      author: httpRequest.body.author,
      isbn: httpRequest.body.isbn,
      publishedAt: httpRequest.body.published_at,
      publisherId: httpRequest.body.publisher_id
    });
    return HttpResponse.created({
      id: output.id
    });
  }

  async update(httpRequest: Request): Promise<Response> {
    const output = this.updateBook.execute({
      id: httpRequest.params.id,
      title: httpRequest.body.title,
      author: httpRequest.body.author,
      isbn: httpRequest.body.isbn,
      publishedAt: httpRequest.body.published_at,
      publisherId: httpRequest.body.publisher_id
    });
    const book = output.book;
    return HttpResponse.ok({
      id: book.id,
      titulo: book.title,
      autor: book.author,
      isbn: book.isbn,
      publisher_id: book.publisherId,
      published_at: book.publishedAt
    });
  }

  async delete(httpRequest: Request): Promise<Response> {
    const output = this.deleteBook.execute({ id: httpRequest.params.id });
    return HttpResponse.ok({ id: output.id });
  }
}
