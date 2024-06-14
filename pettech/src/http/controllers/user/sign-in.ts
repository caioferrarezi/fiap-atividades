import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'
import { makeSignInUseCase } from '@/use-cases/factory/make-sign-in'

export async function signIn(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    username: z.string(),
    password: z.string(),
  })
  const { username, password } = registerBodySchema.parse(request.body)
  const signInUseCase = makeSignInUseCase()
  await signInUseCase.handle(username, password)
  const token = await reply.jwtSign({ username })
  return reply.status(200).send({ token })
}
