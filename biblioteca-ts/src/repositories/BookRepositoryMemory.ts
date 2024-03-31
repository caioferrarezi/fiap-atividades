import { Book } from "../entities/Book";
import { IBookRepository } from "./BookRepository";

export class BookRepositoryMemory implements IBookRepository {
  private livros: Map<string, Book> = new Map();

  findById(id: string): Book | undefined {
    return this.livros.get(id);
  }

  findAll(): Book[] {
    const livros = Array.from(this.livros.values());
    return livros;
  }

  save(livro: Book): void {
    this.livros.set(livro.id, livro);
  }

  update(livro: Book): void {
    this.livros.set(livro.id, livro);
  }

  delete(id: string): void {
    this.livros.delete(id);
  }
}
