import { database } from '@/lib/pg/db'
import { IPerson } from '@/entities/models/Person.interface'
import { IPersonRepository } from '@/repositories/Person.repository.interface'

export class PersonRepository implements IPersonRepository {
  async create({
    cpf,
    name,
    birth,
    email,
    user_id,
  }: IPerson): Promise<IPerson | undefined> {
    const result = await database.clientInstance?.query(
      'INSERT INTO person (cpf, name, birth, email, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [cpf, name, birth, email, user_id],
    )
    return result?.rows[0]
  }
}
