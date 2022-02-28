const { MaxPriorityQueue } = require('datastructures-js')

class Node {
    value = 0
    path = null
    last_row_index = null
    last_column_index = null

    constructor(old_path_value, old_path, added_value, new_direction) {
        // console.log('Node constructor:')
        // console.log(old_path_value, old_path, added_value, new_direction)
        this.value = old_path_value + added_value
        this.path = Array.from(old_path)

        if ( new_direction != null )
            this.path.push(new_direction)

        this.last_row_index = this.path.length
        if ( this.last_row_index > 0 ){
            this.last_column_index = old_path.reduce((acc, curr) => acc + curr, 0) + new_direction
        }
        else
            this.last_column_index = 0
    }
}

// const input_triangle = [
//     [3],
//     [7,4],
//     [2,4,6],
//     [8,5,9,3]
// ]

const input_triangle = [
    [75],
    [95, 64],
    [17, 47, 82],
    [18, 35, 87, 10],
    [20, 04, 82, 47, 65],
    [19, 01, 23, 75, 03, 34],
    [88, 02, 77, 73, 07, 63, 67],
    [99, 65, 04, 28, 06, 16, 70, 92],
    [41, 41, 26, 56, 83, 40, 80, 70, 33],
    [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
    [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
    [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
    [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
    [63, 66, 04, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
    [04, 62, 98, 27, 23, 09, 70, 98, 73, 93, 38, 53, 60, 04, 23],
]

// heap would be faster
const heap = new MaxPriorityQueue({ priority: (node) => node.value })
const possible_directions = [1, 0]

const row_index = 0
const column_index = 0
const root_node = new Node(0, [], input_triangle[row_index][column_index], null)

queue.enqueue(root_node)

let best_found = false
while ( !queue.isEmpty() ) {
    const curr_node = queue.dequeue().element
    // console.log(`Current: ${ JSON.stringify(curr_node) }`)
    // console.log(curr_node.last_row_index)
    const next_row_index = curr_node.last_row_index + 1
    //console.log(next_row_index)
    possible_directions.forEach(direction => {
        if ( best_found )
            return
        // console.log(`Current column index: ${curr_node.last_column_index}`)
        // console.log(`Next direction: ${direction}`)
        const next_column_index = curr_node.last_column_index + direction
        // console.log(`Row index: ${next_row_index}`)
        // console.log(`Column index: ${next_column_index}`)
        // console.log(`Next row: ${input_triangle[next_row_index]}`)
        // console.log(`Old path: ${curr_node.path.length}`)
        const next_value = input_triangle[next_row_index][next_column_index]
        const new_node = new Node(curr_node.value, curr_node.path,
            next_value, direction)
        if ( next_row_index === input_triangle.length - 1 ){ // end
            best_found = true
            console.log(`Found path with highest sum: ${new_node.value}`)

            console.log('Path from top:')
            const nums = new Array()
            const path = new_node.path
            let column_index = 0
            let row_index = 0
            do {
                const number = input_triangle[row_index][column_index]
                nums.push( number )
                console.log(number)

                column_index += path[row_index]
                row_index += 1
            } while ( row_index < input_triangle.length )

            queue.clear()
        }
        else
            queue.enqueue( new_node )
    })
}