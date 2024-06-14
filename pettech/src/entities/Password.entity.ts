import { hash, compare } from 'bcryptjs'

export class Password {
  static async create(password: string): Promise<string> {
    const hashedPassword = await hash(password, 8)
    return hashedPassword
  }

  static async validate(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return compare(password, hashedPassword)
  }
}
