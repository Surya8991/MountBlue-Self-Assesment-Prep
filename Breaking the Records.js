// Problem https://www.hackerrank.com/contests/mountblue-technologies/challenges/breaking-best-and-worst-records
function breakingRecords(scores) {
    // Write your code here
let minChange=0
let maxChange=0
let min=scores[0]
let max=scores[0]
for(let i=1;i<scores.length;i++){
    if(max<scores[i]){
        maxChange++
        max=scores[i]
    }
    else if(min>scores[i]){
        minChange++
        min=scores[i]
    }
    // console.log("min="+min+" max="+max)
}
let result=[maxChange,minChange]
return result
}
console.log(breakingRecords([10,5,20,20,4,5,2,25,1]))