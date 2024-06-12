import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'
import { makeFindAddressByPersonUseCase } from '@/use-cases/factory/make-find-address-by-person'

export async function index(request: FastifyRequest, reply: FastifyReply) {
  const registerParamsSchema = z.object({
    person_id: z.coerce.number(),
  })
  const registerQuerySchema = z.object({
    page: z.coerce.number(),
    limit: z.coerce.number(),
  })
  const { person_id: personId } = registerParamsSchema.parse(request.params)
  const { page, limit } = registerQuerySchema.parse(request.query)
  const findAddressByPersonUseCase = makeFindAddressByPersonUseCase()
  const addressList = await findAddressByPersonUseCase.handle(
    personId,
    page,
    limit,
  )
  reply.status(200).send(addressList)
}
