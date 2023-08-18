export const maybeArray = <T>(value: T | T[]): T[] =>
	Array.isArray(value) ? value : [value];
