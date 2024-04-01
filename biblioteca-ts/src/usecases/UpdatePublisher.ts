import { Publisher } from "../entities/Publisher";
import { IPublisherRepository } from "../repositories/PublisherRepository";

export class UpdatePublisher {
  constructor(
    private readonly publisherRepository: IPublisherRepository
  ) {}

  async execute(input: UpdatePublisherInput): Promise<UpdatePublisherOutput> {
    const publisher = new Publisher(input.id, input.name, input.document);
    await this.publisherRepository.update(publisher);
    return {
      publisher: {
        id: publisher.id,
        name: publisher.name,
        document: publisher.document
      }
    };
  }
}

interface UpdatePublisherInput {
  id: string;
  name: string;
  document: string;
}

interface UpdatePublisherOutput {
  publisher: PublisherOutput;
}

interface PublisherOutput {
  id: string;
  name: string;
  document: string;
}
