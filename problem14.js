function get_chain_length(start_num) {
    let counter = 1
    let curr_num = start_num
    while ( curr_num != 1 ){
        if ( curr_num % 2 === 1){
            curr_num = 3*curr_num + 1
        }
        else{
            curr_num = Math.floor(curr_num / 2)
        }
        counter += 1
    }
    return counter
}

let max_chain_length = null
let max_start_num = null
for (let i = 1_000_000 - 1; i > 0; i--) {
    //console.log(`Trying number ${i}...`)
    const chain_length = get_chain_length(i)

    if (max_chain_length == null || max_chain_length < chain_length){
        max_chain_length = chain_length
        max_start_num = i
    }
}

console.log(`Longest chain (${max_chain_length}) has starting number ${max_start_num}`)