/**
 * Function that finds the first repeated gift id in a list of gifts ids
 * @param {Array<number>} gifts Ids of the gifts
 * @returns {number} Id of the first repeated gift
 */
function findFirstRepeated(gifts = []) {
  const giftsSet = new Set();

  for (let i = 0; i < gifts.length; i++) {
    if (giftsSet.has(gifts[i])) return gifts[i];

    giftsSet.add(gifts[i]);
  }

  return -1;
}

export default findFirstRepeated;
