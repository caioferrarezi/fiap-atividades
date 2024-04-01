import { IBookRepository } from "../repositories/BookRepository";

export class DeleteBook {
  constructor(readonly bookRepository: IBookRepository) {}

  async execute(input: DeleteBookInput): Promise<DeleteBookOutput> {
    await this.bookRepository.delete(input.id);
    return { id: input.id };
  }
}

interface DeleteBookInput {
  id: string;
}

interface DeleteBookOutput {
  id: string;
}
