
const divideAndSort = (num) => {
    let array = []
    let sort = []
    let counter = 0
    let group = ''
    array[0] = ''

    for(let i = 0; i < String(num).length; i++) {
        if(String(num).substr(i, 1) == '0'){
            counter++
            array[counter] = ''
        }else{
            array[counter] = array[counter] + String(num).substr(i, 1)
        }
    }

    for(let k = 0; k <= array.length - 1; k++){
        sort[k] = []
        for(let j = 0; j <= array[k].length - 1; j++){
            sort[k][j] = array[k].substr(j, 1)
        }
    }

    for(let c = 0; c <= sort.length - 1; c++){
        for(let a = 0; a <= sort[c].length - 1; a++){
            for(let b = 0; b <= sort[c].length - 1; b++){
                if(sort[c][b] > sort[c][b + 1]){
                    [sort[c][b], sort[c][b + 1]] = [sort[c][b + 1], sort[c][b]]
                }
            }
        }
        for(let d = 0; d <= sort[c].length -1; d++){
            group = group + sort[c][d]
        }
    }

    console.log(group)
}
divideAndSort(BigInt(98123037221069457))