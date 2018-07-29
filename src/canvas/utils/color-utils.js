
const decimalHex = {
  0: '0', 1: '1', 2: '2', 3: '3',
  4: '4', 5: '5', 6: '6', 7: '7',
  8: '8', 9: '9', 10: 'A', 11: 'B',
  12: 'C', 13: 'D', 14: 'E', 15: 'F',
}

const hexDecimal = {
  '0': '0', '1': '1', '2': '2', '3': '3',
  '4': '4', '5': '5', '6': '6', '7': '7',
  '8': '8', '9': '9', '10': 'A', '11': 'B',
  '12': 'C', '13': 'D', '14': 'E', '15': 'F',
}

function decimalToHex(decimal, hex = '') {
  let equals = decimal / 16;
  let quotient = Math.floor(equals);
  let remainder = decimal % 16;
  hex += decimalHex[remainder];

  if (quotient === 0) {
    return hex.split('').reverse().join('');
  } else {
    return decimalToHex(quotient, hex);
  }
}

// function hexToDecimal(hex) {
//   // return black if hex is invalid
//   if (typeof hex !== 'string' || hex.length !== 6) return 0;

//   const r = hex.slice(0, 1);
//   const b = hex.slice(2, 3);
//   const g = hex.slice(4);

//   console.log(r, b, g);
// }

export {
  // hexToDecimal,
  decimalToHex,
}