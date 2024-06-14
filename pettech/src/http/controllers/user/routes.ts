import { FastifyInstance } from 'fastify'
import { create } from './create'
import { show } from './show'
import { signIn } from './sign-in'

export async function userRoutes(app: FastifyInstance) {
  app.get('/users/:id', show)
  app.post('/users', create)
  app.post('/users/sign-in', signIn)
}
