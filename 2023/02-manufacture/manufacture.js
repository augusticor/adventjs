/**
 * Función que recibe un array de regalos y un string con los materiales disponibles y devuelve un array con los regalos que se pueden fabricar con los materiales disponibles.
 * @param {Array<string>} gifts Regalos a fabricar
 * @param {string} materials Materiales disponibles
 * @returns {Array<string>} Regalos que se pueden fabricar, vacío si no se puede fabricar ninguno
 */
function manufacture(gifts, materials) {
  const materialsLetters = materials.split("");
  const materialsLettersSet = new Set(materialsLetters);

  return gifts.filter((gift) => {
    const giftLetters = gift.split("");
    const giftLettersSet = new Set(giftLetters);

    for (const letter of giftLettersSet) {
      if (!materialsLettersSet.has(letter)) {
        return false;
      }
    }

    return true;
  });
}

export default manufacture;
