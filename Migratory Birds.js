// Problem https://www.hackerrank.com/contests/mountblue-technologies/challenges/migratory-birds
function migratoryBirds(arr) {
    // Write your code here
    const birdsCount = {}
    for (let birdType of arr) {
        if (birdsCount[birdType] == undefined) {
            birdsCount[birdType] = 1
        }
        else {
            birdsCount[birdType]++
        }
    }
    let maxCount = 0
    let mostBirds=Infinity
    for(let birdType in birdsCount){
        if(birdsCount[birdType]>maxCount){
            maxCount=birdsCount[birdType]
            mostBirds=birdType
        }
        else if (birdsCount[birdType]==maxCount){
            mostBirds=Math.min(mostBirds,birdType)
        }
    }
    return mostBirds
}