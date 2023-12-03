// https://www.hackerrank.com/contests/mountblue-technologies/challenges/separate-the-numbers
function separateNumbers(s) {
    // Write your code here
    for (let length = 1; length <= Math.floor(s.length / 2); length++) {
        let firstNum = BigInt(s.substring(0, length));
        let test = firstNum.toString();

        while (test.length < s.length) {
            test += (++firstNum).toString();
        }

        if (test === s) return `YES ${s.substring(0, length)}`;
    }

    return "NO";
}
console.log(separateNumbers(1234))