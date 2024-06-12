import { FastifyInstance } from 'fastify'
import { create } from './create'
import { index } from './index'

export async function addressRoutes(app: FastifyInstance) {
  app.post('/address', create)
  app.get('/address/:person_id', index)
}
