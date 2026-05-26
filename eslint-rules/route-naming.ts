import type { Linter } from 'eslint';

const HTTP_VERBS = ['Get', 'Post', 'Put', 'Patch', 'Delete', 'Head', 'Options'];
const VALID_NAME = new RegExp(
  `^(${HTTP_VERBS.join('|')})[A-Z][a-zA-Z0-9]*Route\\.ts$`
);

const config: Linter.Config = {
  files: ['src/routes/**/*.ts'],
  plugins: {
    'route-conventions': {
      rules: {
        naming: {
          meta: {
            type: 'problem',
            schema: [],
            messages: {
              invalidName:
                'Route file "{{name}}" must match {HttpVerb}{Name}Route.ts (e.g. GetPollRoute.ts).',
            },
          },
          create(context) {
            return {
              Program() {
                const file = context.filename.split('/').at(-1) ?? '';
                if (!VALID_NAME.test(file)) {
                  context.report({
                    loc: { line: 1, column: 0 },
                    messageId: 'invalidName',
                    data: { name: file },
                  });
                }
              },
            };
          },
        },
      },
    },
  },
  rules: {
    'route-conventions/naming': 'error',
  },
};

export default config;
