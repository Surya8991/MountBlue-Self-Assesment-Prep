// Problem https://www.hackerrank.com/contests/mountblue-technologies/challenges/compare-the-triplets

function compareTriplets(a, b) {
    // Code
        let alice=0
        let bob=0
        for(let i=0;i<a.length;i++){
            if(a[i]>b[i]){
                alice+=1
            }else if (b[i]>a[i]){
                bob+=1
            }
            else{
               alice+=0
                bob+=0
            }
        }
        return [alice,bob]
    }