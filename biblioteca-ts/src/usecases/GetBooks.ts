import { IBookRepository } from "../repositories/BookRepository";

export class GetBooks {
  constructor(
    readonly bookRepository: IBookRepository
  ) {}

  async execute(): Promise<GetBooksOutput> {
    const books = await this.bookRepository.findAll();
    return {
      books: books.map(book => ({
        id: book.id,
        title: book.title,
        author: book.author,
        isbn: book.isbn,
        publisherId: book.publisherId,
        publishedAt: book.publishedAt
      }))
    };
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
