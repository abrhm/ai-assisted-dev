import { execSync } from 'child_process';
import { existsSync } from 'fs';
import path from 'path';
import { getHookParamsJSON } from './util/getHookParamsJSON';
import { getLogger } from './util/logger';

const params = await getHookParamsJSON();
const logger = await getLogger({ cwd: params.cwd, module: 'prettier-hook' });

try {
  const filePath = params?.tool_input?.file_path;

  const isFilePathExists = filePath && existsSync(filePath);

  logger.info(`Prettier hook triggered for file: ${filePath || 'N/A'}`);

  if (isFilePathExists) {
    const isInsideRepository = path
      .resolve(filePath)
      .startsWith(params.cwd + path.sep);

    if (isInsideRepository) {
      execSync(`npx prettier --write ${filePath} --ignore-unknown`, {
        stdio: 'inherit',
      });
    }
  }
} catch (error) {
  logger.error(`Prettier hook failed: ${(error as Error).message}`);
}
