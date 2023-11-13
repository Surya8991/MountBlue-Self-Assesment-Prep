// Problem https://www.hackerrank.com/contests/mountblue-technologies/challenges/quicksort1

function quickSort(arr) {
    // Write your code here
let p=arr[0]
let left=[]
let right=[]
let equal=[]
for(let i=0;i<arr.length;i++){
    if(arr[i]===p){
        equal.push(arr[i])
    }else if (arr[i]<p){
        left.push(arr[i])
    }
    else if (arr[i]>p){
        right.push(arr[i])
    }
}
let total=left.concat(equal,right)
let result=total.join('')
return result
}
quickSort([4,5,3,7,2])