// Problem https://www.hackerrank.com/contests/mountblue-technologies/challenges/minimum-absolute-difference-in-an-array

function minimumAbsoluteDifference(arr) {
    // Write your code here
arr.sort((a,b)=>a-b)
let minAbsDiff=Infinity
for(let i=1;i<arr.length;i++){
    const absDiff=Math.abs(arr[i]-arr[i-1])
    minAbsDiff=Math.min(minAbsDiff,absDiff)
}
return minAbsDiff
}
console.log(minimumAbsoluteDifference([1,-3,71,68,17]))