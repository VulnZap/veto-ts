/**
 * Veto - A guardrail system for AI agent tool calls.
 *
 * Veto sits between the AI model and tool execution, intercepting and
 * validating tool calls before they are executed.
 *
 * @packageDocumentation
 *
 * @example
 * ```typescript
 * import { Veto } from 'veto';
 *
 * // Step 1: Initialize Veto (loads config from ./veto automatically)
 * const veto = await Veto.init();
 *
 * // Step 2: Wrap your tools
 * const wrappedTools = veto.wrapTools(myTools);
 *
 * // Step 3: Pass wrappedTools to your AI provider...
 *
 * // Step 4: When the model makes a tool call, validate it
 * const result = await veto.validateToolCall({
 *   id: 'call_123',
 *   name: 'read_file',
 *   arguments: { path: '/etc/passwd' }
 * });
 *
 * if (result.allowed) {
 *   // Execute the tool
 * } else {
 *   console.log('Blocked:', result.validationResult.reason);
 * }
 * ```
 *
 * @module veto
 */

// Main export
export { Veto, ToolCallDeniedError, type VetoOptions, type VetoMode } from './core/veto.js';

// Core types
export type {
  ToolDefinition,
  ToolCall,
  ToolResult,
  ToolHandler,
  ExecutableTool,
  ToolInputSchema,
  JsonSchemaType,
  JsonSchemaProperty,
} from './types/tool.js';

export type {
  LogLevel,
  ValidationDecision,
  ValidationResult,
  ValidationContext,
  Validator,
  NamedValidator,
  ToolCallHistoryEntry,
} from './types/config.js';

// Rule types
export type {
  Rule,
  RuleSet,
  RuleCondition,
  RuleAction,
  RuleSeverity,
  ValidationAPIResponse,
} from './rules/types.js';

// Interception result
export type { InterceptionResult } from './core/interceptor.js';
export type { HistoryStats } from './core/history.js';

// Provider adapters (for converting to/from provider formats)
export {
  toOpenAI,
  fromOpenAI,
  fromOpenAIToolCall,
  toOpenAITools,
  toAnthropic,
  fromAnthropic,
  fromAnthropicToolUse,
  toAnthropicTools,
  toGoogleTool,
  fromGoogleFunctionCall,
} from './providers/adapters.js';

export type {
  OpenAITool,
  OpenAIToolCall,
  AnthropicTool,
  AnthropicToolUse,
  GoogleTool,
  GoogleFunctionCall,
} from './providers/types.js';

// CLI init function (for programmatic use)
export { init, isInitialized } from './cli/init.js';
