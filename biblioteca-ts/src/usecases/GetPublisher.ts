import { IPublisherRepository } from "../repositories/PublisherRepository";

export class GetPublisher {
  constructor(
    private readonly publisherRepository: IPublisherRepository
  ) {}

  async execute(input: GetPublisherInput): Promise<GetPublisherOutput> {
    const publisher = await this.publisherRepository.findById(input.id);
    if (!publisher) return { publisher: undefined };
    return {
      publisher: {
        id: publisher.id,
        name: publisher.name,
        document: publisher.document
      }
    }
  }
}

interface GetPublisherInput {
  id: string;
}

interface GetPublisherOutput {
  publisher: PublisherOutput | undefined;
}

interface PublisherOutput {
  id: string;
  name: string;
  document: string;
}
