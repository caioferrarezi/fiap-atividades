import pgp from 'pg-promise'
import { WorkHour } from './WorkHour'

export class User {
  public workHours?: WorkHour[] = undefined

  constructor(public readonly id: string, public readonly name: string, public readonly email: string) {}

  get letters(): string {
    return this.name.split(' ').map(word => word[0]).join('')
  }

  async getWorkHours(): Promise<any[]> {
    const db = pgp()(process.env.POSTGRES_DB_URL as string)
    const result = await db.any('SELECT * FROM work_hours WHERE user_id = $1', this.id)
    await db.$pool.end()
    return result.map(row => WorkHour.build({
      id: row.id,
      userId: row.user_id,
      workDay: row.work_day,
      startTime: row.start_time,
      endTime: row.end_time
    }))
  }

  static async create(data: UserInput): Promise<User> {
    const db = pgp()(process.env.POSTGRES_DB_URL as string)
    const user = await db.one('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [data.name, data.email])
    await db.$pool.end()
    return new User(user.id, user.name, user.email)
  }

  static async update(id: string, data: UserInput): Promise<void> {
    const db = pgp()(process.env.POSTGRES_DB_URL as string)
    await db.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [data.name, data.email, id])
    await db.$pool.end()
  }

  static async delete(id: string): Promise<void> {
    const db = pgp()(process.env.POSTGRES_DB_URL as string)
    await db.query('DELETE FROM users WHERE id = $1', [id])
    await db.$pool.end()
  }

  static async findAll(): Promise<User[]> {
    const db = pgp()(process.env.POSTGRES_DB_URL as string)
    const result = await db.any('SELECT * FROM users as u  ORDER BY name')
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

type UserInput = {
  name: string
  email: string
}
