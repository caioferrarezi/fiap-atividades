import { IBookRepository } from "../repositories/BookRepository";

export class GetBooksFromPublisher {
  constructor(
    private readonly bookRepository: IBookRepository
  ) {}

  async execute(input: GetBooksFromPublisherInput): Promise<GetBooksFromPublisherOutput> {
    const books = await this.bookRepository.findAllByPublisher(input.publisherId);
    return {
      books: books.map(book => ({
        id: book.id,
        title: book.title,
        author: book.author,
        isbn: book.isbn,
        publishedAt: book.publishedAt
      }))
    }
  }
}

interface GetBooksFromPublisherInput {
  publisherId: string;
}

interface GetBooksFromPublisherOutput {
  books: BookOutput[];
}

interface BookOutput {
  id: string;
  title: string;
  author: string;
  isbn: string;
  publishedAt: number;
}
