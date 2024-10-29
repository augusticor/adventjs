/**
 * Function that calculates the result of a battle between zombies and humans
 * @param {string} zombies a number as string representing the number of zombies
 * @param {string} humans a number as string representing the number of humans
 * @returns {string} the result of the battle "powerz" for zombies and "powerh" for humans, "x" for tie
 */
function battleHorde(zombies, humans) {
  const zombiesPower = zombies
    .split("")
    .reduce((acc, curr) => acc + parseInt(curr), 0);

  const humansPower = humans
    .split("")
    .reduce((acc, curr) => acc + parseInt(curr), 0);

  if (humansPower > zombiesPower) return `${humansPower - zombiesPower}h`;
  if (zombiesPower > humansPower) return `${zombiesPower - humansPower}z`;

  return "x";
}

export default battleHorde;
