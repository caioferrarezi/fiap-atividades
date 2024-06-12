import { IAddress } from './models/Address.interface'

export class Address implements IAddress {
  id?: number
  street: string
  city: string
  state: string
  zipcode: string
  person_id?: number

  constructor(street: string, city: string, state: string, zipcode: string) {
    this.street = street
    this.city = city
    this.state = state
    this.zipcode = zipcode
  }
}
