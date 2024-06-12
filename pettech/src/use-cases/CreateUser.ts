import { IUser } from '@/entities/models/User.interface'
import { IUserRepository } from '@/repositories/User.repository.interface'

export class CreateUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async handle(input: IUser): Promise<IUser | undefined> {
    return this.userRepository.create(input)
  }
}
