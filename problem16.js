const num = 2**1000
const ten = 10
let number = num
let sum = 0

while ( number > 0 ) {
    const digit = number % 10
    
    //console.log(`Digit: ${digit}`)
    sum += digit

    number = Math.floor( number / ten )
}

console.log(`Total sum is ${sum}`)
