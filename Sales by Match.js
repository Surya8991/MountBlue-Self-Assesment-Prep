// https://www.hackerrank.com/contests/mountblue-technologies/challenges/sock-merchant
function sockMerchant(n, ar) {
    // Write your code here
    if (!ar || ar.length != n) {
        return 0
    }
    let pairs = 0
    let obj = {}
    for (let num of ar) {
        obj[num] = obj[num] + 1 || 1
    }
    for (let num of ar) {
        obj[num] = obj[num] % 2 == 0
        pairs += obj[num]
    }
    return pairs
}
console.log(sockMerchant(9,[10,20,20,10,10,30,50,10,20]))