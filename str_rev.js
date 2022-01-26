'use strict'

const { ArgumentParser } = require('argparse')

const parser = new ArgumentParser({
    description: 'Parser for reversing string'
})

parser.add_argument('-s', '--string', { default: 'example', type: String})

const args = parser.parse_args()

const s = args.string

let res = []

for (let i = 0; i < s.length; i++) {
    res.unshift(s.charAt(i))
}

console.log(res.join(''))