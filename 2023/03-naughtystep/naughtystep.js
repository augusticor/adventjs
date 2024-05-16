/**
 * Función que recibe dos cadenas de texto, una original y otra modificada, y devuelve la letra que falta o sobra en la cadena modificada
 * @param {string} original Cadena original de la cadena de la fabrica
 * @param {string} modified Cadena modificada con una letra extra o menos que la original
 * @returns {string} Letra que falta o sobra en la cadena modificada, si no hay ninguna letra que falte o sobre, devolver una cadena vacía
 */
function findNaughtyStep(original, modified) {
  if (original.length === modified.length) return "";

  // Se elimino algo de la cadena original
  else if (original.length > modified.length) {
    for (let index = 0; index < modified.length; index++) {
      if (modified.charAt(index) !== original.charAt(index))
        return original.charAt(index);
    }

    return original.charAt(original.length - 1);
  }

  // Se agrego algo a la cadena original
  else {
    for (let index2 = 0; index2 < original.length; index2++) {
      if (original.charAt(index2) !== modified.charAt(index2))
        return modified.charAt(index2);
    }

    return modified.charAt(modified.length - 1);
  }
}

export default findNaughtyStep;
