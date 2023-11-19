// Problem https://www.hackerrank.com/contests/mountblue-technologies/challenges/beautiful-days-at-the-movies
function beautifulDays(i, j, k) {
    // Write your code here
let count=0
const minNum=i;
const maxNum=j
for(let l=minNum;l<=maxNum;l++){
    let revNum=parseInt(l.toString().split('').reverse().join(''))
    if((l-revNum)%k===0){
        count++
    }
}
return count
}
console.log(beautifulDays(20,23,6))