
const divideAndSort = (num) => {
    let cut = String(num).split('0')
    let hasil = ''
    for(let i = 0; i <= cut.length - 1; i++){
        hasil = hasil + cut[i].split('').sort().join('')
    }
    console.log(hasil);
}
divideAndSort(BigInt(98123037221069457))