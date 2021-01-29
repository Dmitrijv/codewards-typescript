/*

ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet.
ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13.
If there are numbers or special characters included in the string, they should be returned as they are.
Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

*/

console.log(rot13("test")); // grfg
console.log(rot13("Test")); // Grfg

function rot13(message) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const rot13Alphabet = "nopqrstuvwxyzabcdefghijklm";

  return message
    .split("")
    .map((letter) => getCorrespondingChar(letter))
    .join("");

  function getCorrespondingChar(letter) {
    if (!alphabet.includes(letter) && !alphabet.includes(letter.toLowerCase())) return letter;
    if (letter == letter.toUpperCase()) {
      letter = letter.toLowerCase();
      const letterIndex = alphabet.indexOf(letter);
      const ret = rot13Alphabet[letterIndex];
      return ret.toUpperCase();
    } else {
      const letterIndex = alphabet.indexOf(letter);
      return rot13Alphabet[letterIndex];
    }
  }
}
