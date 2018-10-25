function underTen(num) {
  // this takes a number under ten and returns a roman numeral for it
  var oneTen = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"]
  return oneTen[num];
};

function underHundred(num) {
  // this takes a number under one hundred and returns a roman numeral for it
  var tenHundred = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "C"]
  return tenHundred[num]
};

function underThousand(num) {
  // this takes a number under one thousand and returns a roman numeral for it
  var hundredThousand = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM", "M"]
  return hundredThousand[num]
};

function underFourThousand(num) {
  var fourThousand = ["", "M", "MM", "MMM"]
  return fourThousand[num]
};

function converter(input) {
  //this function will take an input
  var arr = input.split("");
  arr.reverse();


  for (var i = 0; i < arr.length; i++) {
    if (i === 0) {
      var ones = underTen(arr[0])
    } else if (i === 1) {
      var tens = underHundred(arr[1])
    } else if (i === 2) {
      var hundreds = underThousand(arr[2])
    } else if (i === 3) {
      var thousands = underFourThousand(arr[3])
    }
    // spit the string into individual characters/indexes
    // will call on the four functions below, iterate through each function, and return the value to this function

    //and output a roman numeral
  };

  if (thousands) {
     return thousands + hundreds + tens + ones
  } else if (hundreds) {
    return hundreds + tens + ones
  } else if (tens) {
    return tens + ones
  } else if (ones) {
    return ones
  }

};

$(function() {



});
