function isPrime(n){
    for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
        if ( n % i === 0 ){
            return false
        }
    }
    return true
}

function compute_formula(a, b, n){
    return n**2 + a*n + b
}

function consecutivePrimes(a,b){
    let n = 0
    while ( isPrime( compute_formula(a, b, n) ) ) {
        n += 1
    }

    return n
}

console.log(`Test: ${ consecutivePrimes(1, 41) === 40 }`)
console.log(`Test: ${ consecutivePrimes(-79, 1601) === 80 }`)
//console.log(consecutivePrimes(-79, 1601))

let max_consecutives = -1
let final_product
for (let a = -1000; a <= 1000; a++) {
    //console.log(`Current: a=${a}`);
    for (let b = -1000; b <= 1000; b++) {
        //console.log(`a=${a}\tb=${b}`)
        const local_consecutives = consecutivePrimes(a,b)
        
        if ( local_consecutives > max_consecutives ){
            //console.log(`n^2 + ${a}n + ${b} ->consecutive: ${local_consecutives}, product: ${a*b}`)
            max_consecutives = local_consecutives
            final_product = a*b
        }
    }
}

console.log(`Final product: ${final_product}`)
//console.log(`Correct solution: -59231`) // why do I get different result?