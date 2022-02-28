const fact_cache = new Map()
fact_cache[1] = 1

function factorial(number) {
    if ( number in fact_cache )
        return fact_cache[number]
    else{
        const value = number * factorial(number - 1)
        fact_cache[number] = value
        return value
    }
}

let number = factorial(100)
let counter = 0

while ( number > 0 ){
    const digit = number % 10
    // console.log(`Digit: ${digit}`)
    counter += digit
    number = Math.floor(number / 10)
}
console.log(`The sum of the digits: ${counter}`)