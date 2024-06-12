import { AddressRepository } from '@/repositories/pg/Address.repository'
import { FindAddressByPersonUseCase } from '../FindAddressByPerson'

export function makeFindAddressByPersonUseCase() {
  const addressRepository = new AddressRepository()
  return new FindAddressByPersonUseCase(addressRepository)
}
