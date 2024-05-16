/**
 * Funcion que descifra un mensaje con parentesis a uno sin parentesis, invirtiendo todo lo dentro de los parentesis
 * @param {string} message Mensaje codificado con los parentesis
 * @returns Mensaje descifrado sin los parentesis
 * @example decode('hola (odnum)') -> hola mundo
 * @example decode('sa(u(cla)atn)s') -> santaclaus
 */
function decode(message) {
  if (message.includes("(")) {
    return decode(
      message.replaceAll(/\(([^()]+)\)/g, (match) =>
        match.slice(1, -1).split("").reverse().join("")
      )
    );
  }

  return message;
}

export default decode;
