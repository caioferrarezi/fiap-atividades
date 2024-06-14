import { z } from 'zod'
import { FastifyReply, FastifyRequest } from 'fastify'
import { makeCreateUserUseCase } from '@/use-cases/factory/make-create-user'
import { hash } from 'bcryptjs'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    username: z.string(),
    password: z.string(),
  })
  const { username, password } = registerBodySchema.parse(request.body)
  const hashedPassword = await hash(password, 8)
  const createUserUseCase = makeCreateUserUseCase()
  const user = await createUserUseCase.handle({
    username,
    password: hashedPassword,
  })
  return reply.status(201).send(user)
}
