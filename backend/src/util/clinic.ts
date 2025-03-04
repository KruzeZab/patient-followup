/**
 * Generate a random string token
 *
 */
export function generateToken() {
  const timestamp = Date.now().toString(16);
  const randomHex = Math.random().toString(16).slice(2, 10);
  return `${timestamp}-${randomHex}`;
}
