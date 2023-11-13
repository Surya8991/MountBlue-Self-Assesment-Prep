// Problem https://www.hackerrank.com/contests/mountblue-technologies/challenges/the-hurdle-race

// Code
function hurdleRace(k, height) {
    // Write your code here
    let maxHeight=Math.max(...height)
    let dose=maxHeight-k
    if(dose>0){
        return dose
    }
    else{
        return 0
    }
}
console.log(hurdleRace(4,[1,6,3,5,2]))