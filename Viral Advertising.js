// Viral Advertising https://www.hackerrank.com/contests/mountblue-technologies/challenges/strange-advertising
function viralAdvertising(n) {
    // Write your code here
let shared=5
let like =0
let sum=0
for(let i=1;i<=n;i++){
    like=Math.floor(shared/2)
    shared=like*3
    sum+=like
}
return sum
}
console.log(viralAdvertising(5))