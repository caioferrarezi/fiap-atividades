import { Publisher } from "../entities/Publisher";
import { IPublisherRepository } from "../repositories/PublisherRepository";

export class CreatePublisher {
  constructor(
    private readonly publisherRepository: IPublisherRepository
  ) {}

  async execute(input: CreatePublisherInput): Promise<CreatePublisherOutput> {
    const publisher = Publisher.create(input.name, input.document);
    await this.publisherRepository.save(publisher);
    return { id: publisher.id };
  }
}

interface CreatePublisherInput {
  name: string;
  document: string;
}

interface CreatePublisherOutput {
  id: string;
}
