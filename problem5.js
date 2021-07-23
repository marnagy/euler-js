const numbers = []
for (let i = 2; i <= 20; i++) {
    numbers.push(i)
}


let n = 1
while (true) {
    let res = true
    numbers.forEach(number => {
        res = res && n % number === 0
    })
    if (res){
        console.log(n)
        break
    }
    n += 1
}