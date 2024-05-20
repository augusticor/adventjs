/**
 * Funcion que recibe una carretera y un numero de pasos que da un reno en esa carretera
 * @param {string} road Carretera que sigue el reno:
 * . = Carretera
 * S = Trineo de Santa
 * * = Barrera abierta
 * | = Barrera cerrada
 * @param {number} time Numero de pasos que da el reno
 * @returns {Array<string>} Devuelve un array con la posicion del reno en la carretera en cada paso
 */
function cyberReindeer(road, time) {
  const steps = [road];
  const regexReplacer = /(S)([.*])/;
  let stepsCount = 1;
  let previousChar = ".";

  while (stepsCount < time) {
    if (stepsCount === 5) road = road.replaceAll("|", "*");

    road = road.replace(regexReplacer, (_, p1, p2) => {
      const returnValue = previousChar + p1;
      previousChar = p2;
      return returnValue;
    });

    steps.push(road);
    stepsCount++;
  }

  return steps;
}

export default cyberReindeer;
