// Problem https://www.hackerrank.com/contests/mountblue-technologies/challenges/save-the-prisoner
function saveThePrisoner(n, m, s) {
    let remCandy = (m % n);
    let finalPrisoner = (s + remCandy - 1);
    if (finalPrisoner > n) {
        finalPrisoner %= n;
    }
    return finalPrisoner === 0 ? n : finalPrisoner;
}

console.log(saveThePrisoner(7, 19, 2));
