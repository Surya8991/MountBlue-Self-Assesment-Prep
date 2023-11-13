// Problem https://www.hackerrank.com/contests/mountblue-technologies/challenges/time-conversion
function timeConversion(s) {
    // Convert String to Number and Time
let [hh,mm,ss]=s.slice(0, -2).split(':').map(Number);
let period=s.slice(-2)
if (period=="AM"){
    if(hh==12){
        hh=0
    }
}
else{
    if(hh!=12){
        hh+=12
    }
}
const result = `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}:${String(ss).padStart(2, '0')}`;
    
    return result;
}