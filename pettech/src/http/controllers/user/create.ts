import { UserRepository } from '@/repositories/User.repository'
import { CreateUserUseCase } from '@/use-cases/CreateUser'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    username: z.string(),
    password: z.string(),
  })

  const { username, password } = registerBodySchema.parse(request.body)

  try {
    const userRepository = new UserRepository()
    const createUserUseCase = new CreateUserUseCase(userRepository)
    const user = await createUserUseCase.handle({ username, password })
    return reply.status(201).send(user)
  } catch (error) {
    console.log(`Internal Server Error: ${error}`)
    throw new Error(`Internal Server Error: ${error}`)
  }
}
