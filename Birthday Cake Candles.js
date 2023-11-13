//Problem https://www.hackerrank.com/contests/mountblue-technologies/challenges/birthday-cake-candles

function birthdayCakeCandles(candles) {
    // Write your code here
    let max = 0
    let count = 0
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] > max) {
            max = candles[i]
        }
    }
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] == max) {
            count += 1
        }
    }
    return count
}
// function birthdayCakeCandles(candles) {
//     const max = Math.max(...candles);
//     return candles.filter(candle => candle === max).length;
// }

console.log(birthdayCakeCandles([3, 2, 1, 3]))