import { IAddress } from '@/entities/models/Address.interface'
import { IPerson } from '@/entities/models/Person.interface'

export interface IAddressRepository {
  findAddressByPersonId(
    personId: number,
    page: number,
    limit: number,
  ): Promise<(IAddress & IPerson)[]>

  create(address: IAddress): Promise<IAddress | undefined>
}
