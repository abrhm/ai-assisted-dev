import Fastify from 'fastify';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';
import { schema, handler } from './routes/GetExampleRoute.js';

const app = Fastify();

await app.register(swagger, {
  openapi: {
    info: { title: 'API', version: '1.0.0' },
  },
});

await app.register(swaggerUi, { routePrefix: '/docs' });

app.get('/example', { schema }, handler);

export default app;
