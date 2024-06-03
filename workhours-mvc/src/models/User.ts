import pgp from 'pg-promise'

export class User {
  constructor(public readonly id: string, public readonly name: string, public readonly email: string) {}

  get letters(): string {
    return this.name.split(' ').map(word => word[0]).join('')
  }

  async getWorkHours(): Promise<any[]> {
    const db = pgp()(process.env.POSTGRES_DB_URL as string)
    const result = await db.any('SELECT * FROM work_hours WHERE user_id = $1', this.id)
    await db.$pool.end()
    return result
  }

  static async findAll(): Promise<User[]> {
    const db = pgp()(process.env.POSTGRES_DB_URL as string)
    const result = await db.any('SELECT * FROM users')
    await db.$pool.end()
    return result.map(row => new User(row.id, row.name, row.email))
  }

  static async findById(id: string): Promise<User> {
    const db = pgp()(process.env.POSTGRES_DB_URL as string)
    const result = await db.one('SELECT * FROM users WHERE id = $1', id)
    await db.$pool.end()
    return new User(result.id, result.name, result.email)
  }
}
