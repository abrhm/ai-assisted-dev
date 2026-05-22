import { appendFile } from 'fs/promises';
import { join } from 'path';

const OUTPUT_FILE = 'claude_hook.log';

interface GetLoggerParams {
  cwd: string;
  module: string;
}

export const getLogger = async ({ cwd, module }: GetLoggerParams) => {
  const writeLog = (level: string, msg: string) =>
    appendFile(
      join(cwd, OUTPUT_FILE),
      `[${new Date().toISOString()}] [${level}] [${module}] ${msg}\n`
    );
  return {
    info: (msg: string) => writeLog('INFO', msg),
    error: (msg: string) => writeLog('ERROR', msg),
  };
};
