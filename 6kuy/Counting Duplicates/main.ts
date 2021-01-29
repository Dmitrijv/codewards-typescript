/*

Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that
occur more than once in the input string. The input string can be assumed to contain only alphabets 
(both uppercase and lowercase) and numeric digits.

clever 1liner by Unnamed

return _(text).countBy(_.toUpper).values().filter(x => x > 1).size();

*/

console.log(duplicateCount("abcde")); // 0
console.log(duplicateCount("aA11")); // 2
console.log(duplicateCount("indivisibility")); // 1

export function duplicateCount(text: string): number {
  const charCounts = text.toLowerCase().split('').reduce((map: any, letter: string) => {
    map[letter] = ~~map[letter] + 1;
    return map;
  }, {});
  return Object.keys(charCounts).filter(key => charCounts[key] > 1).length;
}