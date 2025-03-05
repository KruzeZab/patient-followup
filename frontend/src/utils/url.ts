/**
 * build url from given params
 *
 */
export const buildUrl = (...paths: string[]): string => {
  return paths.map((path) => path.replace(/^\/|\/$/g, '')).join('/');
};

/**
 * Interpolate the given url
 *
 */
export function interpolate(
  template: string,
  params: Record<string, string>
): string {
  return template.replace(/:(\w+)/g, (_, key) => params[key] || '');
}
