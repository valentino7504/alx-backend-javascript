export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const exists = weakMap.get(endpoint);
  if (!exists) weakMap.set(endpoint, 1);
  else if (weakMap.get(endpoint) >= 5) throw new Error('Endpoint load is high');
  else weakMap.set(endpoint, exists + 1);
}
