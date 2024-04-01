import { Book } from "../entities/Book";
import { IBookRepository } from "./BookRepository";

export class BookRepositoryMemory implements IBookRepository {
  private livros: Map<string, Book> = new Map();

  async findById(id: string): Promise<Book | undefined> {
    return this.livros.get(id);
  }

  async findAll(): Promise<Book[]> {
    const livros = Array.from(this.livros.values());
    return livros;
  }

  async save(livro: Book): Promise<void> {
    this.livros.set(livro.id, livro);
  }

  async update(livro: Book): Promise<void> {
    this.livros.set(livro.id, livro);
  }

  async delete(id: string): Promise<void> {
    this.livros.delete(id);
  }
}
