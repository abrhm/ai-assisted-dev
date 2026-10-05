export const schema = {
  summary: 'Hello HTEC',
  response: { 200: { type: 'string' } },
};

export async function handler() {
  return 'Hello HTEC!';
}
