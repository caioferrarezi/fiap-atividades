import pgp from 'pg-promise'
import { Appointment } from './Appointment'
import { DateHelper } from '../helpers/DateHelper'

export class User {
  public appointments?: Appointment[] = undefined

  constructor(public readonly id: string, public readonly name: string, public readonly email: string) {}

  get letters(): string {
    return this.name.split(' ').map(word => word[0]).join('')
  }

  async getAppointments(): Promise<any[]> {
    const db = pgp()(process.env.POSTGRES_DB_URL as string)
    const result = await db.any('SELECT * FROM appointments WHERE user_id = $1 ORDER BY date DESC', this.id)
    await db.$pool.end()
    return result.map(row => new Appointment(row.id, row.user_id, DateHelper.parse(row.date), row.start_time, row.end_time))
  }

  static async create(data: UserInput): Promise<void> {
    const db = pgp()(process.env.POSTGRES_DB_URL as string)
    await db.query('INSERT INTO users (name, email) VALUES ($1, $2)', [data.name, data.email])
    await db.$pool.end()
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
    const result = await db.any('SELECT * FROM users ORDER BY name')
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
