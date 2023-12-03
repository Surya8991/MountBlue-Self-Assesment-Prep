// https://www.hackerrank.com/contests/mountblue-technologies/challenges/utopian-tree
function utopianTree(n) {
    // Write your code here
let height=1
for(let i=1;i<=n;i++){
    if(i%2!=0){
        height=height*2
    }
    else {
        height+=1
    }
}
return height
}
console.log(utopianTree(5))