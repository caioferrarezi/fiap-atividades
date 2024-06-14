import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'
import { makeFindAllProductsUseCase } from '@/use-cases/factory/make-find-all-products'

export async function index(request: FastifyRequest, reply: FastifyReply) {
  const registerQuerySchema = z.object({
    page: z.coerce.number().default(1),
    limit: z.coerce.number().default(10),
  })
  const { page, limit } = registerQuerySchema.parse(request.query)
  const findAllProductsUseCase = makeFindAllProductsUseCase()
  const products = await findAllProductsUseCase.handle(page, limit)
  return reply.status(200).send(products)
}
