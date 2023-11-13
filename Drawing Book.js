// Problem https://www.hackerrank.com/contests/mountblue-technologies/challenges/drawing-book
function pageCount(n, p) {
    // Write your code here
const fromFront=Math.floor(p/2)
const fromBack = Math.floor(n / 2) - Math.floor(p / 2)
return Math.min(fromFront, fromBack);
}