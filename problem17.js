const digits_below_20 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
const tens_above_20  = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
const hundred = 'hundred'
const thousand = 'thousand'

//const test_input = [1, 2, 3, 4, 5]
const input = []
for (let i = 1; i < 1_000; i++) {
    input.push(i)
}

let total_count = 0

input.forEach(num => {
    if (num > 1_000)
        return

    let num_str = num.toString()
    
    if (num_str.length >= 4){
        const thousands_digit = parseInt(num_str.slice(0,1))
        total_count += thousand.length + digits_below_20[thousands_digit].length
        num_str = num_str.slice(1)
    }

    if (num_str.length >= 3){
        const hundreds_digit = parseInt(num_str.slice(0,1))
        total_count += hundred.length + digits_below_20[hundreds_digit].length
        num_str = num_str.slice(1)
    }

    if (num_str.length >= 2){
        const tens_digit = parseInt(num_str.slice(0,1))
        if (tens_digit == 1 || tens_digit == 0){
            const number = parseInt(num_str)
            total_count += digits_below_20[number].length
            return
        }

        total_count += tens_above_20[tens_digit - 2].length
        num_str = num_str.slice(1)
    }

    if (num_str.length >= 1){
        total_count += digits_below_20[parseInt(num_str)].length
    }
});

const wanted_test_sum = 19

//console.log(`Wanted sum: ${wanted_test_sum}`)
console.log(`Computed sum: ${total_count}`)