//const digits = '012'
const digits = '0123456789'

const perms = new Array()

function recPerms(s, acc){
    if ( acc.length === s.length )
        perms.push(acc)

    for (const char of s) {
        if ( acc.indexOf(char) === -1 )
            recPerms(s, acc + char)
    }
}

recPerms(digits, '')

console.log(perms[1_000_000 - 1])