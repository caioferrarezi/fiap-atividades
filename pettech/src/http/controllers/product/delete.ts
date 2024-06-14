import { makeDeleteProductUseCase } from '@/use-cases/factory/make-delete-product'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

export async function _delete(request: FastifyRequest, reply: FastifyReply) {
  const deleteProductParamsSchema = z.object({
    id: z.string(),
  })
  const { id } = deleteProductParamsSchema.parse(request.params)
  const deleteProductUseCase = makeDeleteProductUseCase()
  await deleteProductUseCase.handle(id)
  return reply.status(204).send()
}
