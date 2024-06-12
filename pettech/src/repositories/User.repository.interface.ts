import { IUser } from '@/entities/models/User.interface'
import { IPerson } from '@/entities/models/Person.interface'

export interface IUserRepository {
  create(user: IUser): Promise<IUser | undefined>
  findWithPerson(userId: number): Promise<(IUser & IPerson) | undefined>
}
