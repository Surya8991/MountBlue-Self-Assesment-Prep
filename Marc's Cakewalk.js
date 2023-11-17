// Marc's Cakewalk https://www.hackerrank.com/contests/mountblue-technologies/challenges/marcs-cakewalk
function marcsCakewalk(calorie) {
    // Write your code here
calorie.sort((a,b)=>b-a)
let milesToWalK=0
for(let i=0;i<calorie.length;i++){
milesToWalK+=calorie[i]*Math.pow(2,i)
}
return milesToWalK
}
console.log(marcsCakewalk([7,4,9,6]))