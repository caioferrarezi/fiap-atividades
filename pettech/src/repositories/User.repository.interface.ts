import { IUser } from '@/entities/models/User.interface'
import { IPerson } from '@/entities/models/Person.interface'

export interface IUserRepository {
  findWithPerson(userId: number): Promise<(IUser & IPerson) | undefined>
  findByUsername(username: string): Promise<IUser | undefined>
  create(user: IUser): Promise<IUser | undefined>
}
