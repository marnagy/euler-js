const upto = 100

let sum_of_squares = 0
let sum = 0
for (let i = 1; i <= upto; i++) {
    sum += i
    sum_of_squares += i*i
}

const square_of_sums = sum*sum

console.log(`Res: ${square_of_sums - sum_of_squares}`)