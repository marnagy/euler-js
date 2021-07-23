let sum = 0

for (let a = 1; sum <= 1000; a++) {
    for (let b = 1; sum <= 1000; b++) {
        for (let c = 1; sum <= 1000; c++) {
            if (a + b + c === 1_000){
                console.log(`Product: ${a*b*c}`)
                sum = 1001
            }
        }
    }
}