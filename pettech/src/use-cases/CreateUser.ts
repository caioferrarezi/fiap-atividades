import { Password } from '@/entities/Password.entity'
import { IUser } from '@/entities/models/User.interface'
import { IUserRepository } from '@/repositories/User.repository.interface'

export class CreateUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async handle(user: IUser): Promise<IUser | undefined> {
    const hashedPassword = await Password.create(user.password)
    return this.userRepository.create({
      ...user,
      password: hashedPassword,
    })
  }
}
