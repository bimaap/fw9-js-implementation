
let text = 'malam'
let hasil = ''
if(typeof(text) == 'string'){
    for(let i = text.length -1; i >= 0; i--){
        hasil = hasil + text.substr(i, 1);
    }
    if(text === hasil){
        console.log('Palindrom');
    }else{
        console.log('Bukan Palindrom');
    }
}