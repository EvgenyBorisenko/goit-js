
console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 40)); // 200
console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 20)); // 100

function calculateEngravingPrice (message, pricePerWord) {
  const arrMessage = message.split(' ');
  console.log(arrMessage);
  // console.log(arrMessage.length * pricePerWord);
  return arrMessage.length * pricePerWord;
}