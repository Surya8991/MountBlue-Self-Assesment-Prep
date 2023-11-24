// https://www.hackerrank.com/contests/mountblue-technologies/challenges/diagonal-difference

function diagonalDifference(arr) {
    // Write your code here
    let rightDia = 0
    let leftDia = 0
    for (let i = 0; i < arr.length; i++) {
        const left = arr[i][i]
        const right = arr[i][arr.length - 1 - i]

        rightDia += right
        leftDia += left;

    }
    console.log(Math.abs(leftDia - rightDia));
}

diagonalDifference([[11, 2, 4],
[4,5,6],[10,8,-12]])

// 15