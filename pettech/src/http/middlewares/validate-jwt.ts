import { FastifyRequest, FastifyReply } from 'fastify'

const ROUTE_ALLOW_LIST = new Set(['POST /user', 'POST /user/sign-in'])

export async function validateJwt(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const route = request.routerPath
    const method = request.method
    if (!ROUTE_ALLOW_LIST.has(`${method} ${route}`)) return
    await request.jwtVerify()
  } catch (error) {
    reply.send(401).send({ message: 'Unauthorized' })
  }
}
