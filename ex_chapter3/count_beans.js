// Takes a string as its only argument
// String -> Number
// Return how many uppercase Bs were found in that string


function countBs(str) {
  return countChar(str, "B");
}

function countChar(str, char) {
  let quantity = 0
  for(let cnt = 0; cnt < str.length; cnt++) {
    if(str[cnt] == char) { quantity++ };
  }

  return quantity;
}

console.log(countBs("BOB"));
// → 2
 console.log(countChar("kakkerlak", "k"));
// → 4
