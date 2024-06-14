import { database } from '@/lib/pg/db'
import { IUser } from '@/entities/models/User.interface'
import { IPerson } from '@/entities/models/Person.interface'
import { IUserRepository } from '@/repositories/User.repository.interface'

export class UserRepository implements IUserRepository {
  public async create({
    username,
    password,
  }: IUser): Promise<IUser | undefined> {
    const result = await database.clientInstance?.query<IUser>(
      `
      INSERT INTO "user" (username, password)
      VALUES ($1, $2)
      RETURNING *
      `,
      [username, password],
    )
    return result?.rows[0]
  }

  async findWithPerson(userId: number): Promise<(IUser & IPerson) | undefined> {
    const result = await database.clientInstance?.query(
      `SELECT * FROM "user"
       LEFT JOIN person ON "user".id = person.user_id
       WHERE "user".id = $1`,
      [userId],
    )
    return result?.rows[0]
  }

  async findByUsername(username: string): Promise<IUser | undefined> {
    const result = await database.clientInstance?.query<IUser>(
      `SELECT * FROM "user" WHERE "user".username = $1`,
      [username],
    )
    return result?.rows[0]
  }
}
