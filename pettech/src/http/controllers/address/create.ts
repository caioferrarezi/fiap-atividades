import { z } from 'zod'
import { makeCreateAddressUseCase } from '@/use-cases/factory/make-create-address'
import { FastifyRequest, FastifyReply } from 'fastify'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    street: z.string(),
    city: z.string(),
    state: z.string(),
    zipcode: z.string(),
    person_id: z.coerce.number(),
  })
  const { street, city, state, zipcode, person_id } = registerBodySchema.parse(
    request.body,
  )
  const createAddressUseCase = makeCreateAddressUseCase()
  const address = await createAddressUseCase.handle({
    street,
    city,
    state,
    zipcode,
    person_id,
  })
  return reply.status(201).send(address)
}
