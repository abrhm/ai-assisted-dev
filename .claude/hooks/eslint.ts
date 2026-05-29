import { execSync } from 'child_process';
import { existsSync } from 'fs';
import path from 'path';
import { getHookParamsJSON } from './util/getHookParamsJSON';
import { getLogger } from './util/logger';

const ESLINT_EXTENSIONS = new Set(['.ts', '.md']);

const params = await getHookParamsJSON();
const logger = await getLogger({ cwd: params.cwd, module: 'eslint-hook' });

try {
  const filePath = params?.tool_input?.file_path;
  const isFilePathExists = filePath && existsSync(filePath);

  logger.info(`ESLint hook triggered for file: ${filePath || 'N/A'}`);

  if (isFilePathExists) {
    const ext = path.extname(filePath);
    const isInsideRepository = path
      .resolve(filePath)
      .startsWith(params.cwd + path.sep);

    if (isInsideRepository && ESLINT_EXTENSIONS.has(ext)) {
      execSync(`npx eslint --fix ${filePath}`, { stdio: 'inherit' });
    }
  }
} catch (error) {
  logger.error(`ESLint hook failed: ${(error as Error).message}`);
}
