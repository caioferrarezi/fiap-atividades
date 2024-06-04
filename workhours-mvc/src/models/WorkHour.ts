import pgp from 'pg-promise'

export class WorkHour {
  constructor(
    public readonly id: string,
    public readonly userId: string,
    public readonly workDay: Date,
    public readonly startTime: string,
    public readonly endTime: string
  ) {}

  static build(data: WorkHourInput): WorkHour {
    return new WorkHour(data.id!, data.userId, data.workDay, data.startTime, data.endTime)
  }

  static async create(data: WorkHourInput): Promise<void> {
    const db = pgp()(process.env.POSTGRES_DB_URL as string)
    await db.query('INSERT INTO work_hours (user_id, work_day, start_time, end_time) VALUES ($1, $2, $3, $4)', [
      data.userId,
      data.workDay,
      data.startTime,
      data.endTime
    ])
    await db.$pool.end()
  }

  static async delete(id: string): Promise<void> {
    const db = pgp()(process.env.POSTGRES_DB_URL as string)
    await db.query('DELETE FROM work_hours WHERE id = $1', [id])
    await db.$pool.end()
  }
}

export type WorkHourInput = {
  id?: string
  userId: string
  workDay: Date
  startTime: string
  endTime: string
}
