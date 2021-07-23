function is_palindrome(s) {
    let res = true
    for (let i = 0; i < Math.floor(s.length); i++) {
        if ( s.charAt(i) !== s.charAt(s.length - i - 1) ){
            res = false
            break
        }
    }
    return res
}

const digits = 3
let largest_palindrome = 10

for (let i = 10**digits - 1; i >= 10**(digits - 1); i-=1) {
    for (let j = 10**digits - 1; j >= 10**(digits - 1); j-=1) {
        const prod = i*j
        if ( is_palindrome(prod.toString()) && prod > largest_palindrome ){
            largest_palindrome = prod
        }
    }
}

console.log(`Largest palindrome: ${largest_palindrome}`)