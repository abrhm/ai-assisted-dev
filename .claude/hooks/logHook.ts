import { getHookParamsJSON } from './util/getHookParamsJSON';
import { getLogger } from './util/logger';

const params = await getHookParamsJSON();
const logger = await getLogger({ cwd: params.cwd, module: 'log-hook' });

logger.info(`Hook parameters: ${JSON.stringify(params)}`);
