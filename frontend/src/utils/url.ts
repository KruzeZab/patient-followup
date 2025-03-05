export const buildUrl = (...paths: string[]): string => {
  return paths.map((path) => path.replace(/^\/|\/$/g, '')).join('/');
};
