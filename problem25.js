const fibCache = new Array()
fibCache.push(1n)
fibCache.push(1n)

let index = 1
let number
let num_length = 0
while ( num_length < 1_000n ) {
    index += 1
    const before2 = fibCache[index-2]
    const before1 = fibCache[index-1]
    //console.log(before2, before1)
    number = before2 + before1
    // console.log(`Number of index ${index}: ${number}`)
    fibCache.push(number)
    num_length = number.toString().length
}

const actual_index = index + 1 // array starts from 0, we want to start from 1

console.log(actual_index)
