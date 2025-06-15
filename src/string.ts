export const capitalize = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const kebabCase = (str: string): string =>
  str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase();
