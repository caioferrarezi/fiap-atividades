export class Publisher {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly document: string
  ) {}

  static create(name: string, document: string) {
    const id = crypto.randomUUID();
    return new Publisher(id, name, document);
  }
}
