import { Book } from "../entities/Book";
import { IBookRepository } from "../repositories/BookRepository";

export class UpdateBook {
  constructor(private bookRepository: IBookRepository) {}

  async execute(input: UpdateBookInput): Promise<UpdateBookOutput> {
    const book = new Book(input.id, input.title, input.author, input.isbn, input.publishedAt, input.publisherId);
    await this.bookRepository.update(book);
    return {
      book: {
        id: book.id,
        title: book.title,
        author: book.author,
        isbn: book.isbn,
        publishedAt: book.publishedAt,
        publisherId: book.publisherId
      }
    };
  }
}

export interface UpdateBookInput {
  id: string;
  title: string;
  author: string;
  isbn: string;
  publishedAt: number;
  publisherId: string;
}

export interface UpdateBookOutput {
  book: BookOutput;
}

interface BookOutput {
  id: string;
  title: string;
  author: string;
  isbn: string;
  publisherId: string;
  publishedAt: number;
}
