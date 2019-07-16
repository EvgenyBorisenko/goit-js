let input = prompt('Введите Число!');
const numbers = [];
let total = 0;
//  ПЕРВАЯ ЧАСТЬ!!!!!!!!!!!!!!!!!!!!!!!!  вводим числа 
while(input != null){
  numbers.push(Number.parseInt(input));
  input = prompt('Введите Число!');
}

// вторая ЧАСТЬ!!!!!!!!!!!!!!!!!!!!!!!!  считаем тотал!!!!
for(const number  of numbers){
  // total +=number;
  total=total+number;
}
console.log(`Общая сумма чисел равна ${total}`);
