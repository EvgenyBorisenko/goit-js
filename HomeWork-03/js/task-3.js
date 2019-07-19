// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого
//  продуктивного (который выполнил больше всех задач). Сотрудники и кол-во выполненых задач содержатся как свойства объекта
//   в формате "имя":"кол-во задач".

// 1) Написать функцию findBestEmployee которая принимает объект и возвращает имя самого лучшего сотрудника
//   1.1) Вспомнить какие бывают циклы (for of, for, for in, while, do while), какая разница между ними(), на каких типах данных применяются циклы (for of, for, for in).
//   1.2) Но поскольку функция должна вернуть имя лучшего сотрудника, создать переменную bestEmployee до цикла и вернуть ее в конце тела функции после цикла
//   1.3) После обработки информации в пункте 1.1 определить какой цикл подходит для данной задачи и применить его в правильном синтаксисе.
//   1.4) В цикле перебрать объект, и сравнить значения ключей и ключ под которым хранится самое большле значение записать в переменную bestEmployee
//   1.5) После того как найден лучший сотрудник вернуть из функции переменную bestEmployee в которой хранится строка (а именно имя сотрудника)

// Вызовы функции для проверки работоспособности твоей реализации.
function findBestEmployee(employees){
  let bestName;
  let bestScore = 0;

  for(const employeeKey of Object.keys(employees)) {

    if(employees[employeeKey] > bestScore) {
      bestScore = employees[employeeKey];
      bestName = employeeKey;

    }
  }
return bestName;
}

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux