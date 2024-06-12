import { IPerson } from '@/entities/models/Person.interface'
import { IUser } from '@/entities/models/User.interface'
import { ResourceNotFoundError } from './errors/ResourceNotFoundError'
import { IUserRepository } from '@/repositories/User.repository.interface'

export class FindWithPersonUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async handle(userId: number): Promise<(IUser & IPerson) | undefined> {
    const user = await this.userRepository.findWithPerson(userId)
    if (!user) throw new ResourceNotFoundError()
    return user
  }
}
