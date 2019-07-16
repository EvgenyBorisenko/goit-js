const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];
users.shift ();
console.log(users);


// const users = ['Poly', 'Ajax', 'Chelsey'];
users.pop();
console.log(users);


// const users = ['Poly', 'Ajax'];
users.unshift('Lux')
console.log(users);


// const users = ['Lux','Poly','Ajax'];
users.push('Jay','Kiwi')
console.log(users);


// Удалить из массива элемент хранящийся в переменной userToDelete
// const userToDelete = 'Ajax';
// console.log(users); //  ["Lux", "Poly", "Jay", "Kiwi"]


// const users = ["Lux", "Poly", "Ajax", "Jay", "Kiwi"];
const userToDelete = users.indexOf('Ajax');
const result = users.splice(userToDelete, 1);
console.log(result);
console.log(users);

// Добавить в массив пользователя хранящегося в переменной userToInsert,
// перед пользователем хранящимся в переменной insertBefore
const userToInsert = 'Kong';
const insertBefore = 'Jay';
const index = users.indexOf(insertBefore) + 1;
users.splice(index, 0, userToInsert);
console.log(users); //  ["Lux", "Poly", "Kong", "Jay", "Kiwi"]

