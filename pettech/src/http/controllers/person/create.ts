import { CreatePersonUseCase } from '@/use-cases/CreatePerson'
import { PersonRepository } from '@/repositories/Person.repository'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

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

  try {
    const personRepository = new PersonRepository()
    const createPersonUseCase = new CreatePersonUseCase(personRepository)
    const person = await createPersonUseCase.handle({
      cpf,
      name,
      birth,
      email,
      user_id,
    })
    return reply.status(201).send(person)
  } catch (error) {
    console.log(`Internal Server Error: ${error}`)
    throw new Error(`Internal Server Error: ${error}`)
  }
}
