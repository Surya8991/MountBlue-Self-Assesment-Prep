// problem https://www.hackerrank.com/contests/mountblue-technologies/challenges/bon-appetit
function bonAppetit(bill, k, b) {
    let annaDidntEat = bill[k];
    let totalBill = 0;
  
    for (let i = 0; i < bill.length; i++) {
      if (i !== k) {
        totalBill += bill[i];
      }
    }
  
    let perShare = totalBill / 2;
  
    if (perShare === b) {
      console.log('Bon Appetit');
    } else {
      console.log(b - perShare);
    }
  }
bonAppetit([3,10,2,9],1,7)