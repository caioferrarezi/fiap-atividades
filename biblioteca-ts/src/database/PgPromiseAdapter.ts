import { IDBConnection } from "./DatabaseConnection";
import pgp from 'pg-promise';

export class PgPromiseAdapter implements IDBConnection {
  private connection: any;

  constructor(dbUrl: string) {
    this.connection = pgp()(dbUrl);
  }

  async query(sql: string, params?: any): Promise<any> {
    return this.connection.any(sql, params);
  }

  async close(): Promise<void> {
    this.connection.$pool.end();
  }
}
