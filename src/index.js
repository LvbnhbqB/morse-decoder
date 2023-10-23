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
    // write your solution here

    let result = '';


    for (let i = 0; i < expr.length; i += 10) {
        let simbol = expr.slice (i, i + 10);
        //console.log(simbol);
        if (simbol === '**********') {
            result += ' ';
            //console.log('space');
        } else {
            //console.log('xxx');
            let morseCode = '';
            for (let j = 0; j < simbol.length; j += 2) {
            let code = simbol.slice (j, j + 2);
                if (code === '10') {
                    morseCode += '.';
                    //console.log('to4ka', morseCode);
                    
                } else if (code === '11') {
                    morseCode += '-';
                    //console.log('tire', morseCode);
                }
    
        }
        result += MORSE_TABLE[morseCode];
        //console.log('itog,', result);
    }
    }
    return result;
    
    console.log(result);

}

module.exports = {
    decode
}