import { UserRepository } from '@/repositories/pg/User.repository'
import { FindWithPersonUseCase } from '@/use-cases/FindWithPerson'

export function makeFindWithPersonUseCase() {
  const userRepository = new UserRepository()
  return new FindWithPersonUseCase(userRepository)
}
