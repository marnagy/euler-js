let counter = 1
let current_number = 1

const dim = 1001

const circles_total = Math.floor(dim / 2)
//console.log(`Circles total: ${ circles_total }`)

for (let i = 1; i <= circles_total; i++) {
    for (let j = 0; j < 4; j++) {
        current_number += i*2
        //console.log(`Adding number ${current_number}`)
        counter += current_number
    }
}

console.log(`Total sum: ${counter}`)