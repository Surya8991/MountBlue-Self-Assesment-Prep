// https://www.hackerrank.com/contests/mountblue-technologies/challenges/jumping-on-the-clouds-revisited
function jumpingOnClouds(c, k) {
    const n = c.length;
    let energy = 100;
    let i = k % n;

    energy -= c[i] === 1 ? 3 : 1;

    while (i !== 0) {
        i = (i + k) % n;
        energy -= c[i] === 1 ? 3 : 1;
    }

    return energy;
}
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2))