
let text = 'malam'
let hasil = []
if(typeof(text) == 'string'){
    hasil = text.split('').reverse().join('')
    if(text.toLocaleLowerCase === hasil.toLocaleLowerCase){
        console.log('Palindrom');
    }else{
        console.log('Bukan Palindrom');
    }
}