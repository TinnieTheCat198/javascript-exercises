const reverseString = function(word) {
  const chars = word.split('');
  let length = chars.length;
  let reversed = '';
  for(let i = length - 1; i > -1; i-- ){
    reversed += chars[i];
  }
  return reversed;
};

// Do not edit below this line
module.exports = reverseString;
