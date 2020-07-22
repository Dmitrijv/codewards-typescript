/*
Given a string of digits,
you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
*/
export const fakeBin = (x: string): string => {
  return x.split("").reduce(function(output: string, character: string) {
    return Number(character) < 5 ? (output += "0") : (output += "1");
  }, "");
};

// cleaner solution
// return x.split('').map(res => Number(res) < 5 ? 0 : 1).join('');
