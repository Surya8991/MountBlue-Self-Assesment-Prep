// Problem https://www.hackerrank.com/contests/mountblue-technologies/challenges/grading
function gradingStudents(grades) {
    // Write your code here
    let roundGrades=[]
    for(let i=0;i<grades.length;i++){
   let multFive =Math.ceil(grades[i]/5)*5
   if (grades[i] < 38) {
    roundGrades.push(grades[i])
 }
   else if (multFive - grades[i]< 3) {
        roundGrades.push(multFive)
    }
    else{
        roundGrades.push(grades[i])
    }
}
return roundGrades
}
grades=[66,32,69]
console.log(gradingStudents(grades))