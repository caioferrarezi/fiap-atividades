import { Book } from "../entities/Book";
import { IBookRepository } from "../repositories/BookRepository";

export class CreateBook {
  constructor(
    readonly bookRepository: IBookRepository
  ) {}

  execute(input: CreateBookInput): CreateBookOutput {
    const book = Book.create(input.title, input.author, input.isbn, input.publishedAt, input.publisherId);
    this.bookRepository.save(book);
    return { id: book.id };
  }
}

interface CreateBookInput {
  title: string;
  author: string;
  isbn: string;
  publishedAt: number;
  publisherId: string;
}

interface CreateBookOutput {
  id: string;
}
