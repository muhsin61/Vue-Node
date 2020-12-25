// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const fs = require('fs');
const path = require('path');
const fastifyStatic = require('fastify-static');

fastify.register(fastifyStatic, {
    root: path.join(__dirname, '/dist')
})

// Declare a route
fastify.get('/', async (request, reply) => {
  //return { hello: 'world' }
  const stream = fs.createReadStream('./index.html')
  reply.type('text/html').send(stream)
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()