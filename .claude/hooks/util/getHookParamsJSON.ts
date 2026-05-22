import type { HookParams } from './HookParams';

export const getHookParamsJSON = async (): Promise<HookParams> => {
  const chunks: Buffer[] = [];
  for await (const chunk of process.stdin) {
    chunks.push(chunk);
  }

  const parsedJSON = JSON.parse(Buffer.concat(chunks).toString());
  return parsedJSON;
};
