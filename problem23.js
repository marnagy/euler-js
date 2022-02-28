const { denominators } = require('./problem21')

function denominatorsSum(number) {
    let counter = 0
    for (const d of denominators(number)) {
        counter += d
    }
    return counter
}

function isDeficient(number){
    return denominatorsSum(number) < number
}

function isAbundant(number){
    return denominatorsSum(number) > number
}

const upper_limit_included = 28_123

const abundantNums = new Array()

for (let i = 2; i <= upper_limit_included; i++) {
    if ( isAbundant(i) )
        abundantNums.push(i)
}
console.log(`Amount of abundant numbers: ${abundantNums.length}`)

function isSumOfAbundants(n){
    for (let i = 0; i < abundantNums.length; i++) {
        if ( isAbundant(n - abundantNums[i]) )
            return true
    }
    return false
}

const isSum = new Array(upper_limit_included + 1)

for (let i = 0; i < abundantNums.length; i++) {
    for (let j = 0; j < abundantNums.length; j++) {
        const sum = abundantNums[i] + abundantNums[j]
        if ( sum <= upper_limit_included )
            isSum[sum] = true
    }
}

let counter = 0
for (let i = 1; i <= upper_limit_included; i++) {
    if ( !isSum[i] )
        counter += i
}

console.log(`Total: ${counter}`)