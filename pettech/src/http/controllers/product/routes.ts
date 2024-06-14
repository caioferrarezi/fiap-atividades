import { FastifyInstance } from 'fastify'
import { create } from './create'
import { index } from './index'
import { show } from './show'
import { update } from './update'
import { _delete } from './delete'

export async function productRoutes(app: FastifyInstance) {
  app.get('/products', index)
  app.get('/products/:id', show)
  app.post('/products', create)
  app.put('/products/:id', update)
  app.delete('/products/:id', _delete)
}
