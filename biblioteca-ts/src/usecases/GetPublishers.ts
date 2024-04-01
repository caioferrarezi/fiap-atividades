import { IPublisherRepository } from "../repositories/PublisherRepository";

export class GetPublishers {
  constructor(
    private readonly publisherRepository: IPublisherRepository
  ) {}

  async execute(): Promise<GetPublishersOutput> {
    const publishers = await this.publisherRepository.findAll();
    return {
      publishers: publishers.map(publisher => ({
        id: publisher.id,
        name: publisher.name,
        document: publisher.document
      }))
    }
  }
}

interface GetPublishersOutput {
  publishers: PublisherOutput[];
}

interface PublisherOutput {
  id: string;
  name: string;
  document: string;
}
