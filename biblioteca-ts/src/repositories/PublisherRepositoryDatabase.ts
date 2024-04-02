import { IDBConnection } from "../database/DatabaseConnection";
import { Book } from "../entities/Book";
import { Publisher } from "../entities/Publisher";
import { IPublisherRepository } from "./PublisherRepository";

export class PublisherRepositoryDatabase implements IPublisherRepository {
  constructor(readonly connection: IDBConnection) {}

  async findById(id: string): Promise<Publisher | undefined> {
    const [publisherData] = await this.connection.query("select * from publishers where id = $1", [id]);
    if (!publisherData) return undefined;
    return new Publisher(publisherData.id, publisherData.name, publisherData.document);
  }

  async findAll(): Promise<Publisher[]> {
    const publishersData = await this.connection.query("select * from publishers");
    return publishersData.map((publisherData: any) => (
      new Publisher(publisherData.id, publisherData.name, publisherData.document)
    ))
  }

  async save(publisher: Publisher): Promise<void> {
    await this.connection.query(`
      insert into publishers (id, name, document)
      values ($1, $2, $3)
    `, [publisher.id, publisher.name, publisher.document]);
  }

  async update(publisher: Publisher): Promise<void> {
    await this.connection.query(`
      update publishers
      set name = $1, document = $2
      where id = $3
    `, [publisher.name, publisher.document, publisher.id]);
  }

  async delete(id: string): Promise<void> {
    await this.connection.query("delete from publishers where id = $1", [id]);
  }
}
