import { Publisher } from "../entities/Publisher";
import { IPublisherRepository } from "./PublisherRepository";

export class PublisherRepositoryMemory implements IPublisherRepository {
  private publishers: Map<string, Publisher> = new Map();

  async findById(id: string): Promise<Publisher | undefined> {
    return this.publishers.get(id);
  }

  async findAll(): Promise<Publisher[]> {
    const publishers = Array.from(this.publishers.values());
    return publishers;
  }

  async save(publisher: Publisher): Promise<void> {
    this.publishers.set(publisher.id, publisher);
  }

  async update(publisher: Publisher): Promise<void> {
    this.publishers.set(publisher.id, publisher);
  }

  async delete(id: string): Promise<void> {
    this.publishers.delete(id);
  }
}
