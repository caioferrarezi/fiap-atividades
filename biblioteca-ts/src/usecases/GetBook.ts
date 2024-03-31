import { IBookRepository } from "../repositories/BookRepository";
import type { Maybe } from "../types/utils";

export class GetBook {
  constructor(
    readonly bookRepository: IBookRepository
  ) {}

  execute(input: GetBookInput): GetBookOutput {
    const book = this.bookRepository.findById(input.id);
    if (!book) return { book: undefined }
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

interface GetBookInput {
  id: string;
}

interface GetBookOutput {
  book: Maybe<BookOutput>;
}

interface BookOutput {
  id: string;
  title: string;
  author: string;
  isbn: string;
  publisherId: string;
  publishedAt: number;
}
