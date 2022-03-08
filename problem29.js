const bag = new Set()

const lower_bound = 2
const upper_bound = 100

for (let a = lower_bound; a <= upper_bound; a++) {
    for (let b = lower_bound; b <= upper_bound; b++) {
        bag.add(a**b)
    }
}

console.log(`There is ${bag.size} distinct elements.`)
