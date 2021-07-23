let a = 0
let b = 1

fib_closure = () => {
    temp = a
    a = b
    b = temp + a
    return b
}

let sum = 0
//let counter = 0
for (let res = 0; res < 4_000_000; res = fib_closure()) {
    //counter += 1
    console.log(res)
    if (res % 2 === 0) {
        sum += res
    }
}

console.log(`Sum: ${sum}`)
//console.log(`Cycles: ${counter}`)