export default function guardrail(mathFunction) {
  const queue = [];

  try {
    queue.push(mathFunction());
    queue.push(result);
  } catch (error) {
    queue.push(error.message);
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
