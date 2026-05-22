export interface HookParams extends Record<string, unknown> {
  cwd: string;
  tool_input?: {
    file_path?: string;
  };
}
