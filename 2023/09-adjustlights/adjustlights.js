/**
 * Función que recibe una secuencia de luces y devuelve la cantidad de luces que hay que cambiar para que sigan la secuencia
 * @param {Array<"🔴" | "🟢">} lights Secuencia de luces en un array
 * @returns {number} Cantidad de luces que hay que cambiar porque no siguen la secuencia
 * @example adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']) -> Solo la cuarta posicion cambia a '🔴'
 */
function adjustLights(lights) {
  const redLight = "🔴";
  const greenLight = "🟢";
  let counterFirst = 0;
  let counterSecond = 0;

  for (let i = 0; i < lights.length; i += 2) {
    if (lights[i] !== undefined && lights[i] !== greenLight) counterFirst++;

    if (lights[i + 1] !== undefined && lights[i + 1] !== redLight)
      counterFirst++;

    if (lights[i] !== undefined && lights[i] !== redLight) counterSecond++;

    if (lights[i + 1] !== undefined && lights[i + 1] !== greenLight)
      counterSecond++;
  }

  return Math.min(counterFirst, counterSecond);
}

export default adjustLights;
