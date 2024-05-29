/**
 * SOLUCION: 180 puntos, 2019 ops/s, Complejidad cognitiva: 8
 * Función que comprueba si una cadena es una copia válida de otra teniendo en cuenta degradacion de la copia
 * Recorre la cadena original y la copia a la vez:
 * - Si los caracteres son iguales, sigue
 * - Si los caracteres son diferentes y en minuscula la letra original es diferente a la copia:
 *      - Devuelve false si:
 *      - El carácter de la copia no está en el mapa de degradaciones excepto si el carácter de la cadena original es un espacio o
 *      - Tiene un valor menor que el carácter de la cadena original
 * - En cualquier otro caso, devuelve true
 * @param {string} original String original
 * @param {string} copy String copia a verificar si es copia de original
 * @returns {boolean} Devuelve true si copy es una copia válida de original, false en caso contrario
 * @example checkIsValidCopy("Santa Claus is coming", "sa#ta Cl#us i+ comin#") // true
 * @example checkIsValidCopy("s#nta Cla#s is coming", "p#nt: cla#s #s c+min#") // false (por la p inicial)
 */
function checkIsValidCopy(original, copy) {
  if (original.length !== copy.length) return false;

  const degradationsMap = new Map();
  degradationsMap.set("#", 0);
  degradationsMap.set("+", 1);
  degradationsMap.set(":", 2);
  degradationsMap.set(".", 3);
  degradationsMap.set(" ", 4);

  for (let i = 0; i < original.length; i++) {
    if (
      original[i] !== copy[i] &&
      original[i].toLowerCase() !== copy[i] &&
      (!degradationsMap.has(copy[i]) ||
        original[i] === " " ||
        degradationsMap.get(copy[i]) < degradationsMap.get(original[i]))
    )
      return false;
  }

  return true;
}

export default checkIsValidCopy;
