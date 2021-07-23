const number = 600851475143
const primes = []

let n = number
let i = 2
while (n > 1) {
    if (n % i === 0){
        primes.push(i)
        while (n % i === 0){
            n = Math.floor(n / i)
        }
    }
    i += 1
}

console.log(`Prime factors: ${primes}`)
console.log(`The biggest one: ${primes[primes.length - 1]}`)