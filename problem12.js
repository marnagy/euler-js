function triangle_number(n) {
    return n*(n+1)/2
}

function get_divisors(n) {
    const divisors = []
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            divisors.push(i)
            divisors.push(n/i)
        }
    }
    return divisors
}

let number = 0
let triangle_num = 0
const wanted_divisors = 500
let divisors = []
while (divisors.length < wanted_divisors){
    number += 1
    triangle_num = triangle_number(number)
    divisors = get_divisors( triangle_num )
}

console.log(`The first number with ${wanted_divisors} divisors: ${triangle_num}`)