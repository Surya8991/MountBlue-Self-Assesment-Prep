// Problem https://www.hackerrank.com/contests/mountblue-technologies/challenges/staircase/problem

// code
function staircase(n) {
    // Write your code here
for(let i=1;i<=n;i++){
   console.log(" ".repeat(n-i)+"#".repeat(i))
}
}