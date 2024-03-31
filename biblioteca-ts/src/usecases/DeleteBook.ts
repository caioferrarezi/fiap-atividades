import { IBookRepository } from "../repositories/BookRepository";

export class DeleteBook {
  constructor(readonly bookRepository: IBookRepository) {}

  execute(input: DeleteBookInput): DeleteBookOutput {
    this.bookRepository.delete(input.id);
    return { id: input.id };
  }
}

export interface DeleteBookInput {
  id: string;
}

export interface DeleteBookOutput {
  id: string;
}
