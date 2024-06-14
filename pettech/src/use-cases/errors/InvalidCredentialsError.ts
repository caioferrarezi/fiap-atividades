export class InvalidCredentialsError extends Error {
  constructor(message = 'Username or password is incorrect') {
    super(message)
  }
}
