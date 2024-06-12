import { IAddress } from '@/entities/models/Address.interface'
import { IPerson } from '@/entities/models/Person.interface'
import { IAddressRepository } from '../Address.repository.interface'
import { database } from '@/lib/pg/db'

export class AddressRepository implements IAddressRepository {
  async findAddressByPersonId(personId: number, page: number, limit: number) {
    const offset = (page - 1) * limit
    const query = `
      SELECT "address".*, "person".*
      FROM "address"
      JOIN "person" ON "address".person_id = "person".id
      WHERE "address".person_id = $1
      LIMIT $2 OFFSET $3
    `
    const result = await database.clientInstance?.query<IAddress & IPerson>(
      query,
      [personId, limit, offset],
    )

    return result?.rows || []
  }

  async create(address: IAddress): Promise<IAddress | undefined> {
    const result = await database.clientInstance?.query<IAddress>(
      `
      INSERT INTO "address" (street, city, state, zipcode, person_id)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
      `,
      [
        address.street,
        address.city,
        address.state,
        address.zipcode,
        address.person_id,
      ],
    )

    return result?.rows[0]
  }
}
