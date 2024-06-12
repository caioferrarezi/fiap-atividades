import { IPerson } from '@/entities/models/Person.interface'

export interface IPersonRepository {
  create(person: IPerson): Promise<IPerson | undefined>
}
