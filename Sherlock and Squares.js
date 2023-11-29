// https://www.hackerrank.com/contests/mountblue-technologies/challenges/sherlock-and-squares
function squares(a, b) {
    let count = 0;
    for (let i = a; i <= b; i++) {
      if (Number.isInteger(Math.sqrt(i))) {
        count++;
      }
    }
    return count;
  }
  
  console.log(squares(17, 24)); // Output: 0  