import { Livro } from '../entities/Book';

interface IBookRepository {
  findById(id: string): Livro | undefined;
  findAll(): Livro[];
  save(livro: Livro): void;
  update(livro: Livro): void;
  delete(id: string): void;
}
