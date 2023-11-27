// https://www.hackerrank.com/contests/mountblue-technologies/challenges/angry-professor
function angryProfessor(k, a) {
    // Write your code here
    let count=0
for(let i=0;i<a.length;i++){
    if(a[i]<=0){
count++
    }
}
if(count>=k){
    return "NO"
}
else{
    return "YES"
}
}
console.log(angryProfessor(2,[-1,0,4,2]))