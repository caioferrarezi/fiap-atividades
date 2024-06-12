import { IAddress } from '@/entities/models/Address.interface'
import { IAddressRepository } from '@/repositories/Address.repository.interface'

export class CreateAddressUseCase {
  constructor(private readonly addressRepository: IAddressRepository) {}

  async handle(address: IAddress): Promise<IAddress | undefined> {
    return this.addressRepository.create(address)
  }
}
