import { UserRepository } from '@/repositories/User.repository'
import { FindWithPersonUseCase } from '@/use-cases/FindWithPerson'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function show(request: FastifyRequest, reply: FastifyReply) {
  const registerParamsSchema = z.object({
    id: z.coerce.number(),
  })

  const { id } = registerParamsSchema.parse(request.params)

  try {
    const userRepository = new UserRepository()
    const findWithPersonUseCase = new FindWithPersonUseCase(userRepository)
    const user = await findWithPersonUseCase.handle(id)
    return reply.status(200).send(user)
  } catch (error) {
    console.log(`Find User Error: ${error}`)
    throw new Error(`Find User Error: ${error}`)
  }
}
