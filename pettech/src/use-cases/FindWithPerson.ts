import { Person } from '@/entities/Person.entity'
import { User } from '@/entities/User.entity'
import { UserRepository } from '@/repositories/User.repository'

export class FindWithPersonUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async handle(userId: number): Promise<(User & Person) | undefined> {
    return await this.userRepository.findWithPerson(userId)
  }
}
