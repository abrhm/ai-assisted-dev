import { execFileSync } from 'child_process';
import { existsSync } from 'fs';
import path from 'path';
import { getHookParamsJSON } from './util/getHookParamsJSON';
import { getLogger } from './util/logger';

const ESLINT_EXTENSIONS = new Set(['.ts', '.md']);

interface ExecError extends Error {
  stdout?: string;
  stderr?: string;
}

const params = await getHookParamsJSON();
const logger = await getLogger({ cwd: params.cwd, module: 'eslint-hook' });

const filePath = params?.tool_input?.file_path;

try {
  const isFilePathExists = filePath && existsSync(filePath);

  await logger.info(`ESLint hook triggered for file: ${filePath || 'N/A'}`);

  if (isFilePathExists) {
    const ext = path.extname(filePath);
    const isInsideRepository = path
      .resolve(filePath)
      .startsWith(params.cwd + path.sep);

    if (isInsideRepository && ESLINT_EXTENSIONS.has(ext)) {
      execFileSync('npx', ['eslint', '--fix', filePath], {
        cwd: params.cwd,
        encoding: 'utf8',
        stdio: 'pipe',
      });
    }
  }
} catch (error) {
  const { message, stdout, stderr } = error as ExecError;
  const output = [stdout, stderr].filter(Boolean).join('\n').trim() || message;

  await logger.error(`ESLint hook failed: ${output}`);
  process.stdout.write(
    JSON.stringify({
      decision: 'block',
      reason: `ESLint errors in ${filePath ?? 'N/A'}:\n${output}`,
    })
  );
}
