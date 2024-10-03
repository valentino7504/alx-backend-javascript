export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();
    queue.push(result);
  } catch (e) {
    queue.push(`${e.name}: ${e.message}`);
  }
  queue.push('Guardrail was processed');
  return queue;
}
