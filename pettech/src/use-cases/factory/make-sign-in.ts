import { SignInUseCase } from '@/use-cases/SignIn'
import { UserRepository } from '@/repositories/pg/User.repository'

export function makeSignInUseCase() {
  const userRepository = new UserRepository()
  return new SignInUseCase(userRepository)
}
