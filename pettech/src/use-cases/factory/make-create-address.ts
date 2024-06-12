import { AddressRepository } from '@/repositories/pg/Address.repository'
import { CreateAddressUseCase } from '../CreateAddress'

export function makeCreateAddressUseCase() {
  const addressRepository = new AddressRepository()
  return new CreateAddressUseCase(addressRepository)
}
