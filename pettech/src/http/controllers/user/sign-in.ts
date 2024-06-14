import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'
import { makeSignInUseCase } from '@/use-cases/factory/make-sign-in'
import { compare } from 'bcryptjs'
import { InvalidCredentialsError } from '@/use-cases/errors/InvalidCredentialsError'

export async function signIn(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    username: z.string(),
    password: z.string(),
  })
  const { username, password } = registerBodySchema.parse(request.body)
  const signInUseCase = makeSignInUseCase()
  const user = await signInUseCase.handle(username)
  const isValidPassword = await compare(password, user.password)
  if (!isValidPassword) throw new InvalidCredentialsError()
  const token = await reply.jwtSign({ username })
  return reply.status(200).send({ token })
}
