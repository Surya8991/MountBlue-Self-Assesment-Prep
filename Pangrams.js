// https://www.hackerrank.com/contests/mountblue-technologies/challenges/pangrams
function pangrams(s) {
    // Write your code here
let alphabets='abcdefghijklmnopqrstuvwxyz';
let lowerCaseString=s.toLowerCase()
for (let char of alphabets) {
    if (!lowerCaseString.includes(char)) {
        return "not pangram";
    }
}

return "pangram";
}
console.log(pangrams("We promptly judged antique ivory buckles for the prize"))