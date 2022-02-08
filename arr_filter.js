const a = []

for (let i = 0; i < 10; i++) {
    a.push(i)
}

console.log( a.filter(n => n % 2 == 0) )