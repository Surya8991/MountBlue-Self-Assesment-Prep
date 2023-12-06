function bigSorting(unsorted) {
    let numberArray = unsorted.map(BigInt);

    // Custom sorting function for BigInt
    for (let i = 0; i < numberArray.length; i++) {
        for (let j = i + 1; j < numberArray.length; j++) {
            if (numberArray[i] > numberArray[j]) {
                let temp = numberArray[i];
                numberArray[i] = numberArray[j];
                numberArray[j] = temp;
            }
        }
    }

    let stringArray = numberArray.map(String);

    return stringArray;
}

let unsortedArray = [
    "31415926535897932384626433832795",
    "1",
    "3",
    "10",
    "3",
    "5"
];

let sortedArray = bigSorting(unsortedArray);
console.log(sortedArray);
