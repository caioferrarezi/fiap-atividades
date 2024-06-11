import { Person } from '@/entities/Person.entity'
import { PersonRepository } from '@/repositories/Person.repository'

export class CreatePersonUseCase {
  constructor(private readonly personRepository: PersonRepository) {}

  handle(person: Person): Promise<Person | undefined> {
    return this.personRepository.create(person)
  }
}
