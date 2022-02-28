function* denominators(number){
    for (let i = 1; i < number; i++) {
        if ( number % i === 0 ){
            yield i
        }
    }
}

for (let i = 1; i < 10_000; i++) {
    let counter = 0
    for (const d of denominators(i) ) {
        counter += d
    }
    //console.log(`${i} -> ${counter}`)
}

module.exports = { denominators }