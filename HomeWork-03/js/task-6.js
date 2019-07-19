// Напиши функцию calculateTotalPrice(arr, productName), которая получает массив объектов и имя продукта (значение свойства name).
//  Возвращает общую стоимость продукта (цена * количество).
// Вызовы функции для проверки работоспособности твоей реализации.
function calculateTotalPrice(arr, productName){
let total = 0;
for(const product of products){
  if(product.name === productName){
total = product.price * product.quantity
}
}
return total;
}


const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800




// const users = [
//   { name: 'Poly', age: 7, mood: 'happy' },
//   { name: 'Mango', age: 4, mood: 'blissful'},
//   { name: 'Ajax', age: 3, mood: 'tired' }
// ];

// function getAllPropValues(arr, prop) {
//   for ( let i = 0; i < users.length; i += 1 ) {
//     let arr = Object.entries(users[i]);

//     users[i] = arr;

//     const index = users[i][0].indexOf(prop);
//     let newArr = [];

//     newArr.push(users[i][0][1]);

//     console.log(newArr);
//   }

//   return newArr;
// }