const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    let regexp = new RegExp(/[*]{10}/gi);
    let regexp10 = new RegExp(/10/gi);
    let regexp11 = new RegExp(/11/gi);
    let regexp0 = new RegExp(/0/gi);



    let str = expr.replace(regexp, ' ').split(' ')
    let result = ''
    let phrase = ''
    str.forEach(n => {
        let cut = 0
        for (let i = 0; i < n.length/10; i++) {
            result+=n.slice(cut, cut+10).replace(regexp10, '.').replace(regexp11, '-') + ' '
            cut = cut+10
        }
        result = result.replace(regexp0, '').split(' ').map(m => {
            if (m === "") {
                phrase+=' '
            } else {
                phrase+=MORSE_TABLE[m]
            }

        } ).join('')
    })
    return phrase.trim()
}

module.exports = {
    decode
}