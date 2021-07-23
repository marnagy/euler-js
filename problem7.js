const primes = [2,3,5,7]
let counter = 4

let n = 8
while (counter < 10_001){
    let res = true
    primes.forEach(p => {
        res = res && n % p !== 0
    } )
    if (res) {
        primes.push(n)
        counter += 1
    }
    n += 1
}

console.log(primes[primes.length - 1])