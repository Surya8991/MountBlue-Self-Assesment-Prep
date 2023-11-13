// Problem https://www.hackerrank.com/contests/mountblue-technologies/challenges/plus-minus

function plusMinus(arr) {
    // Write your code here
    let size=arr.length
    let pos=0
    let neg=0
    let zer=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0) pos+=1
        else if (arr[i]<0) neg+=1
        else zer+=1
    }
    console.log((pos/size).toFixed(6))
    console.log((neg/size).toFixed(6))
    console.log((zer/size).toFixed(6))
}
plusMinus([-4,3,-9,0,4,1])