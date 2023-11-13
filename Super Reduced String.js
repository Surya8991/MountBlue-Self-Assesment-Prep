// Problem https://www.hackerrank.com/contests/mountblue-technologies/challenges/reduced-string
function superReducedString(s) {
    // Write your code here
    let sArray = [...s]
    for (let i = 0; i < sArray.length; i++) {
        if (sArray[i] === sArray[i + 1]) {
            sArray.splice(i, 2)
            i=-1
        }
    }
    return !sArray[0]?"Empty String": sArray.join('')
}
console.log(superReducedString('aaabccddd'))