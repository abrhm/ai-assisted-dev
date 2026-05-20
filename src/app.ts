import Fastify from 'fastify';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';

const app = Fastify();

await app.register(swagger, {
  openapi: {
    info: { title: 'API', version: '1.0.0' },
  },
});

await app.register(swaggerUi, { routePrefix: '/docs' });

app.get('/', {
  schema: {
    summary: 'Hello world',
    response: { 200: { type: 'string' } },
  },
}, async () => 'Hello, World!');

export default app;
