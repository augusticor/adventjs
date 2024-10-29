/**
 * Función que recibe un array de pociones y un objetivo de poder y devuelve un array con los índices de las pociones que suman el objetivo
 * @param {Array<number>} potions Array del poder de cada poción
 * @param {number} target Objetivo de suma de poder de las pociones
 * @returns {Array<number>} Array con los índices de las pociones que suman el objetivo
 */
function createMagicPotion(potions, target) {
  const map = new Map();

  for (let i = 0; i < potions.length; i++) {
    const search = target - potions[i];

    if (map.has(search)) {
      return [map.get(search), i];
    }

    map.set(potions[i], i);
  }

  return undefined;
}

export default createMagicPotion;
