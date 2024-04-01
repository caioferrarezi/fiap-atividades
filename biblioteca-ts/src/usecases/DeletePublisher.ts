import { IPublisherRepository } from "../repositories/PublisherRepository";

export class DeletePublisher {
  constructor(
    private readonly publisherRepository: IPublisherRepository
  ) {}

  async execute(input: DeletePublisherInput): Promise<DeletePublisherOutput> {
    await this.publisherRepository.delete(input.id);
    return {
      id: input.id
    };
  }
}

interface DeletePublisherInput {
  id: string;
}

interface DeletePublisherOutput {
  id: string;
}
