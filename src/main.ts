// enum

// enum Role {
//   ADMIN = 'admin',
//   USER = 'user',
//   GUEST = 'guest',
// }

// const handleGreetMessage = (role: Role, name: string) => {
//   switch (role) {
//     case Role.ADMIN:
//       return `Hello Admin ${name}`;
//     case Role.USER:
//       return `Hello  ${name}`;
//     case Role.GUEST:
//       return `Hello Guest ${name}`;
//   }
// };
// console.log(handleGreetMessage(Role.ADMIN, 'Alex'));

// generic

// Задача 1. Узагальнена функція wrapInArray
// Умова

// Є функція:

// function wrapInArray(value) {
//   return [value];
// }

// Зараз вона не типізована.

// Завдання

// Зроби функцію узагальненою.

//

function wrapInArray<T>(value: T): T[] {
  return [value];
}
console.log(wrapInArray<number>(1));

// Задача 2. Узагальнена функція getLastElement
// Умова

// Створи функцію getLastElement, яка:

// приймає масив будь-якого типу

// повертає останній елемент масиву

// Зроби функцію узагальненою.

//

const getLastElement = <T>(ell: T[]): T => {
  return ell[ell.length - 1];
};
console.log(getLastElement<string | number>([1, 45, 'string']));

// Задача 3. Узагальнена функція pair
// Умова

// Створи функцію pair, яка:

// приймає два значення, які можуть бути різного типу

// повертає їх як масив або кортеж [перший, другий]

// Зроби функцію узагальненою

//

// const pair = <T1, T2>(x: T1, y: T2): (T1| T2)[] => {
const pair = <T1, T2>(x: T1, y: T2): [T1, T2] => {
  return [x, y];
};
console.log(pair<number, string>(1, '2'));
