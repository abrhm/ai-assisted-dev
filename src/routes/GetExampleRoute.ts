export const schema = {
  summary: 'Hello world',
  response: { 200: { type: 'string' } },
};

// TODO:
// Use arrow function
// Route handler should always have params even if it is unused handler(_req: FastifyRequest, _res: FastifyReply)
export async function handler() {
  return 'Hello, World!';
}
