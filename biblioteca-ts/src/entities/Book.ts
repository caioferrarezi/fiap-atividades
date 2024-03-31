export class Book {
  constructor(
    readonly id: string,
    readonly title: string,
    readonly author: string,
    readonly isbn: string,
    readonly publishedAt: number,
    readonly publisherId: string
  ) {}

  static create(title: string, author: string, isbn: string, publishedAt: number, publisherId: string) {
    const id = crypto.randomUUID();
    return new Book(id, title, author, isbn, publishedAt, publisherId);
  }
}
