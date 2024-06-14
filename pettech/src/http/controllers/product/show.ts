import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'
import { makeFindProductUseCase } from '@/use-cases/factory/make-find-product'

export async function show(request: FastifyRequest, reply: FastifyReply) {
  const registerParamsSchema = z.object({
    id: z.coerce.string(),
  })
  const { id } = registerParamsSchema.parse(request.params)
  const findProductUseCase = makeFindProductUseCase()
  const product = await findProductUseCase.handle(id)
  return reply.status(200).send(product)
}
