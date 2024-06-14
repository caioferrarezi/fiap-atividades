import { IUser } from '@/entities/models/User.interface'
import { IUserRepository } from '@/repositories/User.repository.interface'
import { InvalidCredentialsError } from '@/use-cases/errors/InvalidCredentialsError'

export class SignInUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async handle(username: string): Promise<IUser> {
    const user = await this.userRepository.findByUsername(username)
    if (!user) throw new InvalidCredentialsError()
    return user
  }
}
