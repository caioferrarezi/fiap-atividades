import { IBookRepository } from "../repositories/BookRepository";

export class GetBooks {
  constructor(
    readonly bookRepository: IBookRepository
  ) {}

  execute(): GetBooksOutput {
    const books = this.bookRepository.findAll();
    return { books };
  }
}

interface GetBooksOutput {
  books: BookOutput[];
}

interface BookOutput {
  id: string;
  title: string;
  author: string;
  isbn: string;
  publisherId: string;
  publishedAt: number;
}
