// Problem https://www.hackerrank.com/contests/mountblue-technologies/challenges/electronics-shop
function getMoneySpent(keyboards, drives, b) {
    let maxSpent = -1;

    for (let i = 0; i < keyboards.length; i++) {
        for (let j = 0; j < drives.length; j++) {
            let sum = keyboards[i] + drives[j];
            if (sum <= b && sum > maxSpent) {
                maxSpent = sum;
            }
        }
    }

    return maxSpent;
}


console.log(getMoneySpent([40, 50, 60], [5, 8, 12], 60))