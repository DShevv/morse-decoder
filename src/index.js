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
  var message = ''
  var code = ''
  var lettesr = expr.match(/.{1,10}/g);

  for (let index = 0; index < lettesr.length; index++) {
    code = ''
    if (lettesr[index] != '**********') {
      for (let i = 0; i < lettesr[index].length; i += 2) {
        if( lettesr[index][i].toString()+lettesr[index][i+1].toString()  == '10'){
          code += '.';
        }
        if(lettesr[index][i].toString()+lettesr[index][i+1].toString() == '11'){
          code += '-';
        }
      }
      message += MORSE_TABLE[code]
     
    }
    else{
      message += ' '
    }  
  }
  return message
}

module.exports = {
    decode
}