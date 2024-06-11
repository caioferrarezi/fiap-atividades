import { FastifyInstance } from 'fastify'
import { create } from './create'

export async function personRoutes(app: FastifyInstance) {
  app.post('/persons', create)
}
