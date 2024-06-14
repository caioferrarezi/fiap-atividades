import { z } from 'zod'
import { FastifyReply, FastifyRequest } from 'fastify'
import { makeCreateCategoryUseCase } from '@/use-cases/factory/make-create-category'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string(),
  })
  const { name } = registerBodySchema.parse(request.body)
  const createCategoryUseCase = makeCreateCategoryUseCase()
  await createCategoryUseCase.handle(name)
  return reply.status(201).send()
}
