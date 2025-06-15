export const unique = <T>(arr: T[]): T[] => [...new Set(arr)];

export const flatten = <T>(arr: (T | T[])[]): T[] => {
  return ([] as T[]).concat(...arr);
};
