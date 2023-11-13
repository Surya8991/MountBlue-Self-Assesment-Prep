// Problem https://www.hackerrank.com/contests/mountblue-technologies/challenges/caesar-cipher-1

function caesarCipher(s, k) {
    let result = "";
  
    for (let i = 0; i < s.length; i++) {
      let char = s[i];
  
      if (/[a-zA-Z]/.test(char)) {
        let isUpperCase = char === char.toUpperCase();
        let offset = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
        let rotatedChar = String.fromCharCode(((char.charCodeAt(0) - offset + k) % 26) + offset);
  
        if (isUpperCase) {
          result += rotatedChar.toUpperCase();
        } else {
          result += rotatedChar;
        }
      } else {
        result += char;
      }
    }
  
    return result;
  }
console.log(caesarCipher("middle-Outz", 2))