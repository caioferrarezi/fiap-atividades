import { FastifyInstance } from 'fastify'
import { create } from './create'
import { show } from './show'

export async function userRoutes(app: FastifyInstance) {
  app.get('/users/:id', show)
  app.post('/users', create)
}
