// Problem https://www.hackerrank.com/contests/mountblue-technologies/challenges/counting-valleys
function countingValleys(steps, path) {
    // Write your code here
let valley=0
let level=0
for(let step of path){
    let prev=level
    level=step==="U"?level+1:level-1;
    if(prev=-1&&level===0){
valley++
    }
}
return valley
}