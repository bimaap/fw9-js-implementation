let text = "Bima Armedianto"
let array = []
let hasil = ""
let counter = 0

array[0] = ""

if(typeof(text) != "number"){
    for(let i = 0; i <= text.length - 1; i++){
        if(text.substr(i, 1) != " "){
            array[counter] = array[counter] + text.substr(i, 1)
        }else{
            counter++
            array[counter] = ""
        }
    }
    for(let j = array.length - 1; j >= 0; j--){
        hasil = hasil + array[j] + " "
    }
    console.log(hasil);
}
