// Problems https://www.hackerrank.com/contests/mountblue-technologies/challenges/the-birthday-bar
function birthday(s, d, m) {
    // Write your code here
let count=0
for(let i=0;i<=s.length-m;i++){
    let subArr=s.slice(i,i+m)
    let sum=subArr.reduce((a,b)=>a+b)
    if(sum===d){
        count++
    }
}
return count
}
console.log([1,2,1,3,2],3,2)