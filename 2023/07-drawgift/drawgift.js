/**
 * Función que dibuja un regalo 3d con el tamaño y símbolo especificado
 * @param {number} size Tamaño del regalo 3d, primera fila
 * @param {string} symbol Símbolo que se usará para dibujar el regalo
 * @returns {string} Regresa un string con el regalo dibujado
 */
function drawGift(size, symbol) {
  if (size === 1) return "#\n";

  const padStartSize = size + (size - 1);
  const top = "#".repeat(size).padStart(padStartSize);
  const repeatAmount = size - 2;

  // Armar la parte del medio
  const middleConstant = "#" + symbol.repeat(repeatAmount) + "#";
  let topMiddle = top + "\n";
  for (let i = 0; i < repeatAmount; i++) {
    topMiddle +=
      (middleConstant + symbol.repeat(i) + "#").padStart(padStartSize) + "\n";
  }

  const center = "#".repeat(size) + symbol.repeat(repeatAmount) + "#";

  // Invertir la cadena middle
  const bottomMiddle = topMiddle
    .split("\n")
    .reverse()
    .map((line) => line.trim())
    .join("\n");

  return topMiddle + center + bottomMiddle + "\n";
}

export default drawGift;
