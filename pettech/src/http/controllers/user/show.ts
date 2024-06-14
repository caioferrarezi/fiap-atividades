import { z } from 'zod'
import { FastifyReply, FastifyRequest } from 'fastify'
import { makeFindWithPersonUseCase } from '@/use-cases/factory/make-find-with-person'

export async function show(request: FastifyRequest, reply: FastifyReply) {
  const registerParamsSchema = z.object({
    id: z.coerce.number(),
  })
  const { id } = registerParamsSchema.parse(request.params)
  const findWithPersonUseCase = makeFindWithPersonUseCase()
  const user = await findWithPersonUseCase.handle(id)
  return reply.status(200).send({
    id: user?.id,
    username: user?.username,
  })
}
