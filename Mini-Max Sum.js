// Problem https://www.hackerrank.com/contests/mountblue-technologies/challenges/mini-max-sum
function miniMaxSum(arr) {
    // Write your code here
    miniNo=Math.min(...arr)
    maxNo=Math.max(...arr)
    let total=0
    for(let i=0;i<arr.length;i++){
        total+=arr[i]
    }
    console.log(total-maxNo,total-miniNo) 
}
miniMaxSum([1,3,5,7,9])