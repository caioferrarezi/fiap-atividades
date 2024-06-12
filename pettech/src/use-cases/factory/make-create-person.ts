import { PersonRepository } from '@/repositories/pg/Person.repository'
import { CreatePersonUseCase } from '@/use-cases/CreatePerson'

export function makeCreatePersonUseCase() {
  const personRepository = new PersonRepository()
  return new CreatePersonUseCase(personRepository)
}
