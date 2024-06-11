import { User } from '@/entities/User.entity'
import { UserRepository } from '@/repositories/User.repository'

export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async handle(input: User): Promise<User | undefined> {
    return this.userRepository.create(input)
  }
}
