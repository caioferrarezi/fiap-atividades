import { IUserRepository } from '@/repositories/User.repository.interface'
import { InvalidCredentialsError } from '@/use-cases/errors/InvalidCredentialsError'
import { Password } from '@/entities/Password.entity'

export class SignInUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async handle(username: string, password: string): Promise<void> {
    const user = await this.userRepository.findByUsername(username)
    if (!user) throw new InvalidCredentialsError()
    const isValidPassword = await Password.validate(password, user.password)
    if (!isValidPassword) throw new InvalidCredentialsError()
  }
}
