import { IPerson } from '@/entities/models/Person.interface'
import { IPersonRepository } from '@/repositories/Person.repository.interface'

export class CreatePersonUseCase {
  constructor(private readonly personRepository: IPersonRepository) {}

  handle(person: IPerson): Promise<IPerson | undefined> {
    return this.personRepository.create(person)
  }
}
