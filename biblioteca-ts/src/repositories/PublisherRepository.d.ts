import { Book } from '../entities/Book';
import { Publisher } from '../entities/Publisher';

export interface IPublisherRepository {
  findById(id: string): Promise<Publisher | undefined>;
  findAll(): Promise<Publisher[]>;
  save(publisher: Publisher): Promise<void>;
  update(publisher: Publisher): Promise<void>;
  delete(id: string): Promise<void>;
}
