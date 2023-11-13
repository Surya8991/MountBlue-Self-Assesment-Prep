// Problem https://www.hackerrank.com/contests/mountblue-technologies/challenges/mars-exploration
// code
function marsExploration(s) {
    // Write your code here
let sArray=s.split('')
let count=0
for(let i=0;i<sArray.length;i++)
{
    if(sArray[i]!="S" && sArray[i]!="O"){
        count++
    }
}
return count
}
console.log(marsExploration('SOSSPSSQSSOR'))