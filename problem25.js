const fibCache = new Array()
fibCache.push(1n)
fibCache.push(1n)

let index = 1n
let number
let num_length = 0n
while ( num_length < 1_000n ) {
    index += 1n
    const before2 = fibCache[index-2n]
    const before1 = fibCache[index-1n]
    //console.log(before2, before1)
    number = before2 + before1
    // console.log(`Number of index ${index}: ${number}`)
    fibCache.push(number)
    num_length = number.toString().length
}


console.log(index + 1) // array starts from 0, we want to start from 1

// const phi = (1+Math.sqrt(5))/2 // golden ratio
// const term = Math.ceil((Math.log10(5)/2 + d-1) / Math.log10(phi))