const checkForSpam = function(str) {

  let arrStr = str.split(' ');

  for (const  word of arrStr){
    if( word.toLowerCase().includes('spam') || word.toLowerCase().includes('sale')) {
      return true;
    } 
  } 
  return false;


  // return str.toLowerCase().includes('spam') || str.toLowerCase().includes('sale');
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true