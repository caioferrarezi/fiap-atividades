export interface IDBConnection {
  query(sql: string, params?: any): Promise<any>;
  close(): Promise<void>;
}
