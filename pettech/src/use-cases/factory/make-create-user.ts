import { UserRepository } from '@/repositories/pg/User.repository'
import { CreateUserUseCase } from '@/use-cases/CreateUser'

export function makeCreateUserUseCase() {
  const userRepository = new UserRepository()
  return new CreateUserUseCase(userRepository)
}
