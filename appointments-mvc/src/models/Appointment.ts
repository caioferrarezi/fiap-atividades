import pgp from 'pg-promise'
import { User } from './User'
import { DateHelper } from '../helpers/DateHelper'

export class Appointment {
  constructor(
    public readonly id: string,
    public readonly userId: string,
    public readonly date: Date,
    public readonly startTime: string,
    public readonly endTime: string
  ) {}

  async getUser(): Promise<User> {
    const db = pgp()(process.env.POSTGRES_DB_URL as string)
    const result = await db.query('SELECT * FROM users WHERE id = $1', this.userId)
    await db.$pool.end()
    return new User(result.id, result.name, result.email)
  }

  static async findById(id: string): Promise<Appointment> {
    const db = pgp()(process.env.POSTGRES_DB_URL as string)
    const result = await db.query('SELECT * FROM appointments WHERE id = $1', [id])
    await db.$pool.end()
    return new Appointment(result.id, result.user_id, DateHelper.parse(result.date), result.start_time, result.end_time)
  }

  static async create(data: AppointmentInput): Promise<void> {
    const db = pgp()(process.env.POSTGRES_DB_URL as string)
    await db.query('INSERT INTO appointments (user_id, date, start_time, end_time) VALUES ($1, $2, $3, $4)', [
      data.userId,
      data.workDay,
      data.startTime,
      data.endTime
    ])
    await db.$pool.end()
  }

  static async update(id: string, data: AppointmentInput): Promise<void> {
    const db = pgp()(process.env.POSTGRES_DB_URL as string)
    await db.query('UPDATE appointments SET user_id = $1, date = $2, start_time = $3, end_time = $4 WHERE id = $5', [
      data.userId,
      data.workDay,
      data.startTime,
      data.endTime,
      id
    ])
    await db.$pool.end()
  }

  static async delete(id: string): Promise<void> {
    const db = pgp()(process.env.POSTGRES_DB_URL as string)
    await db.query('DELETE FROM appointments WHERE id = $1', [id])
    await db.$pool.end()
  }
}

export type AppointmentInput = {
  userId: string
  workDay: Date
  startTime: string
  endTime: string
}
