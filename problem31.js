const coins = [1,2,5,10,20,50,100,200]

const wanted = 200

let combinations = 0

for (let i = 0; i <= Math.floor(wanted / 1); i++) { // 1
    for (let j = 0; j <= Math.floor(wanted / 2); j++) { // 2
        for (let k = 0; k <= Math.floor(wanted / 5); k++) { // 5
            for (let l = 0; l <= Math.floor(wanted / 10); l++) { // 10
                for (let m = 0; m <= Math.floor(wanted / 20); m++) { // 20
                    for (let n = 0; n <= Math.floor(wanted / 50); n++) { // 50
                        for (let o = 0; o <= Math.floor(wanted / 100); o++) { // 100
                            for (let p = 0; p <= Math.floor(wanted / 200); p++) { // 200
                                const val = i*1 + 2*j + 5*k + 10*l + 20*m + 50*n + 100*o + 200*p
                                if ( val == wanted ){
                                    combinations += 1
                                    //console.error(`${val}=${i}*1+${j}*2+${k}*5+${l}*10+${m}*20+${n}*50+${o}*100+${p}*200`)
                                    //console.log(`Combinations: ${combinations}`)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

console.log(`There is ${combinations} different combinations for value ${wanted}`)