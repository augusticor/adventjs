/**
 * Función que crea un árbol de navidad con las decoraciones y la altura indicada
 * @param {string} ornaments Decoraciones del árbol de navidad
 * @param {number} height Altura del árbol de navidad
 * @returns {string} Árbol de navidad con las decoraciones y la altura indicada
 */
function createChristmasTree(ornaments, height) {
  const oneLineTree = ornaments.repeat(100);
  let tree = "";

  // Armar el arbol
  for (let i = 1, fromIndex = 0; i <= height; fromIndex += i, i++) {
    tree +=
      " ".repeat(height - i) +
      oneLineTree
        .slice(fromIndex, fromIndex + i)
        .split("")
        .join(" ") +
      "\n";
  }

  // Agregar el tronco
  tree += " ".repeat(height > 0 ? height - 1 : 0) + "|\n";

  return tree;
}

export default createChristmasTree;
