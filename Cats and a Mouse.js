// Problem https://www.hackerrank.com/contests/mountblue-technologies/challenges/cats-and-a-mouse
function catAndMouse(x, y, z) {
let catADistance=Math.abs(z-x)
let catBDistance=Math.abs(z-y)
if(catADistance<catBDistance){
    return "Cat A"
}
else if(catADistance>catBDistance){
    return "Cat B"
}
else{
    return "Mouse C"
}
}
console.log(catAndMouse(2,5,4))