/*

ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet.
ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13.
If there are numbers or special characters included in the string, they should be returned as they are.
Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

*/

console.log(rot13ts("test")); // grfg

function rot13ts(message: string) {
  return message.split("").map((letter) => getCorrespondingChar(letter));

  const alphabet: string = "abcdefghijklmnopqrstuvwxyz";
  function getCorrespondingChar(letter: string) {
    const letterIndex: number = alphabet.indexOf(letter);
    const targetIndex: number = letterIndex + 13 <= 25 ? letterIndex + 13 : 25 - letterIndex;
  }
}
