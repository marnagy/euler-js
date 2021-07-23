var ProgressBar = require('progress')

const primes = []
let sum = 0
let bar = new ProgressBar(':percent [:bar] :etas', {
    total: 2_000_000 - 2,
    complete: '#',
    incomplete: '-'
})

for (let i = 2; i < 2_000_000; i++) {
    bar.tick()
    let res = true
    for (let p = 0; p < primes.length; p++) {
        const element = primes[p];
        if (i % element === 0){
            res = false
            break
        }
    }
    //primes.forEach(p => res = res && i % p !== 0)
    if (res) {
        //console.log(`Prime ${i} found`)
        primes.push(i)
        sum += i
    }
}

console.log(`Sum: ${sum}`)