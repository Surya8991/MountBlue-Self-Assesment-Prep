// Problem https://www.hackerrank.com/contests/mountblue-technologies/challenges/strong-password
function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const digitRegex = /[0-9]/;
    const specialCharsRegex = /[!@#$%^&*()\-+]/;

    let requireMets=0
    if(!lowercaseRegex.test(password)) {
        requireMets++
    }
    if(!uppercaseRegex.test(password)) {
        requireMets++
    }
    if(!digitRegex.test(password)) {
        requireMets++
    }
    if(!specialCharsRegex.test(password)) {
        requireMets++
    }
    if(n+requireMets<6){
        requireMets+=(6-(n+requireMets))
    }
    return requireMets
}