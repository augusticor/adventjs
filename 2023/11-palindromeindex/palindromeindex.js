/**
 * Funcion que evalua si una palabra se vuelve palindrome al cambiar dos indices del string
 * @param {string} word Palabra a evaluar si haciendo un cambio de indices se vuelve palindrome
 * @returns {[] | number[] | null} Indices que al cambiarlos la palabra se vuelve palindrome
 */
function getIndexsForPalindrome(word) {
  const triedWords = new Set();

  function isPalindrome(word) {
    if (triedWords.has(word)) return false;

    triedWords.add(word);
    return word === word.split("").reverse().join("");
  }

  if (isPalindrome(word)) return [];

  for (let i = 0; i < word.length; i++) {
    for (let j = i + 1; j < word.length; j++) {
      const newWord = word.split("");
      [newWord[i], newWord[j]] = [newWord[j], newWord[i]];

      if (isPalindrome(newWord.join(""))) return [i, j];
    }
  }

  return null;
}

export default getIndexsForPalindrome;
