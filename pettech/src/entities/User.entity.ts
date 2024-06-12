import { IUser } from './models/User.interface'

export class User implements IUser {
  id?: string
  username: string
  password: string

  constructor(username: string, password: string) {
    this.username = username
    this.password = password
  }
}
