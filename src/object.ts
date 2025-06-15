export const pick = (
  obj: Record<string, unknown>,
  keys: string[]
): Record<string, unknown> => {
  const result: Record<string, unknown> = {};
  for (const key of keys) {
    if (obj && Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key] = obj[key];
    }
  }
  return result;
};

export const omit = (
  obj: Record<string, unknown>,
  keys: string[]
): Record<string, unknown> => {
  const result: Record<string, unknown> = {};
  for (const key in obj) {
    if (!keys.includes(key)) {
      result[key] = obj[key];
    }
  }
  return result;
};

export function hasField<T, K extends string>(
  obj: unknown,
  key: K
): obj is T & Record<K, unknown> {
  return typeof obj === "object" && obj !== null && key in obj;
}
