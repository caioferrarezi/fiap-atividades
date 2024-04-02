import { IDBConnection } from "../database/DatabaseConnection";
import { Book } from "../entities/Book";
import { IBookRepository } from "./BookRepository";

export class BookRepositoryDatabase implements IBookRepository {
  constructor(readonly connection: IDBConnection) {}

  async findById(id: string): Promise<Book | undefined> {
    const [bookData] = await this.connection.query("select * from books where id = $1", [id]);
    if (!bookData) return undefined;
    return new Book(bookData.id, bookData.title, bookData.author, bookData.isbn, parseInt(bookData.published_at, 10), bookData.publisher_id);
  }

  async findAll(): Promise<Book[]> {
    const booksData = await this.connection.query("select * from books");
    return booksData.map((bookData: any) => (
      new Book(bookData.id, bookData.title, bookData.author, bookData.isbn, parseInt(bookData.published_at, 10), bookData.publisher_id)
    ))
  }

  async save(book: Book): Promise<void> {
    await this.connection.query(`
      insert into books (id, title, author, isbn, published_at, publisher_id)
      values ($1, $2, $3, $4, $5, $6)
    `, [book.id, book.title, book.author, book.isbn, book.publishedAt, book.publisherId]);
  }

  async update(book: Book): Promise<void> {
    await this.connection.query(`
      update books
      set title = $1, author = $2, isbn = $3, published_at = $4, publisher_id = $5
      where id = $6
    `, [book.title, book.author, book.isbn, book.publishedAt, book.publisherId, book.id]);
  }

  async delete(id: string): Promise<void> {
    await this.connection.query("delete from books where id = $1", [id]);
  }
}
