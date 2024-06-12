import { z } from 'zod'
import { FastifyReply, FastifyRequest } from 'fastify'
import { makeCreatePersonUseCase } from '@/use-cases/factory/make-create-person'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    cpf: z.string().min(11).max(14),
    name: z.string(),
    birth: z.coerce.date(),
    email: z.string().email(),
    user_id: z.coerce.number(),
  })
  const { cpf, name, birth, email, user_id } = registerBodySchema.parse(
    request.body,
  )
  const createPersonUseCase = makeCreatePersonUseCase()
  const person = await createPersonUseCase.handle({
    cpf,
    name,
    birth,
    email,
    user_id,
  })
  return reply.status(201).send(person)
}
