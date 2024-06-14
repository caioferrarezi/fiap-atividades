import 'reflect-metadata'
import '@/lib/typeorm/typeorm'
import fastify from 'fastify'
import fastifyJwt from '@fastify/jwt'
import { env } from './env'
import { validateJwt } from '@/http/middlewares/validate-jwt'
import { personRoutes } from '@/http/controllers/person/routes'
import { userRoutes } from '@/http/controllers/user/routes'
import { addressRoutes } from '@/http/controllers/address/routes'
import { productRoutes } from '@/http/controllers/product/routes'
import { categoryRoutes } from '@/http/controllers/category/routes'
import { globalErrorHandler } from '@/utils/global-error-handler'

export const app = fastify()

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  sign: { expiresIn: '1h' },
})
app.addHook('onRequest', validateJwt)
app.register(personRoutes)
app.register(userRoutes)
app.register(addressRoutes)
app.register(productRoutes)
app.register(categoryRoutes)

app.setErrorHandler(globalErrorHandler)
