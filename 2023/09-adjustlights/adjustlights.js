/**
 * Función que recibe una secuencia de luces y devuelve la cantidad de luces que hay que cambiar para que sigan la secuencia
 * @param {Array<"🔴" | "🟢">} lights Secuencia de luces en un array
 * @returns {number} Cantidad de luces que hay que cambiar porque no siguen la secuencia
 * @example adjustLights(|) -> Only position 4 changes to '🔴'
 */
function adjustLights(lights) {
  let counter = 0;
  
  for (let i = lights.length - 1; i > 0; i --) {
    if (lights[i] === lights[i - 1]) {
      counter++;
      lights[i - 1] = lights[i - 1] === "🟢" ? "🔴" : "🟢";
    }
  }

  return counter;
}

export default adjustLights;
