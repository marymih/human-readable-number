module.exports = function toReadable (number) {

  let numbers = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen'
  };

  let dozens = {
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety',
    10: 'one hundred'
  };

  let res = '';

  let units = number % 10;
  let dozen = (Math.floor(number / 10)) % 10;
  let hundreds = Math.floor(Math.floor(number / 10) / 10);
  if (number == 0) {
    return 'zero';
  }
  if (units > 0) {
    res = numbers[String(units)];
  }
  if (dozen > 0) {
    if (dozen < 2) {
      res = numbers[String(dozen) + String(units)];
    } else {
      res = `${dozens[String(dozen)]}${res ? ' '+ res : ''}`;
    }
  }    
  if (hundreds > 0) {
    res = `${numbers[String(hundreds)]} hundred${res ? ' '+ res : ''}`;
  }
  return res;
}
