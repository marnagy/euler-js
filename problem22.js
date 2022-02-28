const { readFileSync } = require('fs')


let data = readFileSync('p022_names.txt', { encoding: 'utf-8'})
data = data.replace(/"/g, '').replace(/,/g, '\n')
let lines = data.split('\n').sort()
data = null

const alphabet = ' abcdefghijklmnopqrstuvwxyz'

let counter = 0
for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    let line_counter = 0
    for (const char of line) {
        line_counter += alphabet.indexOf(char.toLowerCase())
    }
    const line_number = line_counter * (i + 1)
    //console.log(`Line number for "${line}": ${line_number}`)
    counter += line_number
}
console.log(`Total sum: ${counter}`)
