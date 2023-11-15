// https://www.hackerrank.com/contests/mountblue-technologies/challenges/camelcase
function camelcase(s) {
    // Write your code here
let words=1
for(let i=0;i<s.length;i++){
    if(s[i]===s[i].toUpperCase())
        {
            words++
        }
}
    return words
}