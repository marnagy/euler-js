const dim = 20

function get_paths(x,y){
    let counter = 0
    if ( x === dim && y === dim )
        return 1

    if ( x < dim ) {
        counter += get_paths(x+1, y)
    }
    if ( x === y )
        return 2*counter

    if ( y < dim ) {
        counter += get_paths(x, y+1)
    }
    return counter
}

console.log(`Paths for ${dim}x${dim}: ${get_paths(0,0)}`)