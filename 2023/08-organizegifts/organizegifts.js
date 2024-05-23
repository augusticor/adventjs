/**
 * Funcion para organizar regalos en grupos de a 10 (box), grupos de 5 boxes (pale) y bolsas el resto (bag)
 * @param {string} gifts regalos
 * @returns {string} regalos organizados
 * @example organizeGifts(`76a11b`) // '[a]{a}{a}(aaaaaa){b}(b)'
 */
function organizeGifts(gifts) {
  // Split the gifts string into an array of strings like '76a', '11b', etc.
  const splitGifts = gifts.match(/\d+\w/g) || [];

  return splitGifts.reduce((accumulator, currentValue) => {
    let number = parseInt(currentValue.slice(0, -1), 10);
    const symboli = currentValue.at(-1);

    // Calculate the number of pales, boxes and bags
    const paleCount = Math.floor(number / 50);
    number -= paleCount * 50;
    const boxesCount = Math.floor(number / 10);
    number -= boxesCount * 10;
    const bagsCount = number;

    // Create strings for pales, boxes and bags
    const pales = `[${symboli}]`.repeat(paleCount);
    const boxes = `{${symboli}}`.repeat(boxesCount);
    const bags = bagsCount > 0 ? `(${symboli.repeat(bagsCount)})` : "";

    // Return the new accumulator
    return accumulator + pales + boxes + bags;
  }, "");
}

export default organizeGifts;
