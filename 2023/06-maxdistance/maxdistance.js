/**
 * Función que recibe una cadena de movimientos que puede realizar un reno y devuelve el número máximo de pasos que puede dar el reno
 * @param {string} movements Movimientos que puede realizar el reno ">"|"*"|"<"
 * @returns {number} Número máximo de pasos que puede dar el reno
 * @example maxDistance(">>*<") // returns 2
 * @example maxDistance("<<<>") // returns 2
 * @example maxDistance(">***>") // returns 5
 * @example maxDistance("><><") // returns 0
 */
function maxDistance(movements) {
  const advanceQuantity = movements.match(/>/g)?.length ?? 0;
  const backQuantity = movements.match(/</g)?.length ?? 0;
  const anyDirectionQuantity = movements.match(/\*/g)?.length ?? 0;

  return Math.abs(advanceQuantity - backQuantity) + anyDirectionQuantity;
}

export default maxDistance;
