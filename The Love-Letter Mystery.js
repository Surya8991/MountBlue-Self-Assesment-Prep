// https://www.hackerrank.com/contests/mountblue-technologies/challenges/the-love-letter-mystery
function theLoveLetterMystery(s) {
    // Write your code here
let count=0
let length=s.length;
for(let i=0;i<Math.floor(length/2);i++){
    count+=Math.abs(s.charCodeAt(i)-s.charCodeAt(length-i-1))
}
return count
}
console.log(theLoveLetterMystery("abc"))