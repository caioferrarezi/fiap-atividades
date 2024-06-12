import { IAddress } from '@/entities/models/Address.interface'
import { IPerson } from '@/entities/models/Person.interface'
import { IAddressRepository } from '@/repositories/Address.repository.interface'

export class FindAddressByPersonUseCase {
  constructor(private readonly addressRepository: IAddressRepository) {}

  async handle(
    personId: number,
    page: number,
    limit: number,
  ): Promise<(IAddress & IPerson)[]> {
    return this.addressRepository.findAddressByPersonId(personId, page, limit)
  }
}
