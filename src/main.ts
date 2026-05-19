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

// function wrapInArray<T>(value: T): T[] {
//   return [value];
// }
// console.log(wrapInArray<number>(1));

// Задача 2. Узагальнена функція getLastElement
// Умова

// Створи функцію getLastElement, яка:

// приймає масив будь-якого типу

// повертає останній елемент масиву

// Зроби функцію узагальненою.

//

// const getLastElement = <T>(ell: T[]): T => {
//   return ell[ell.length - 1];
// };
// console.log(getLastElement<string | number>([1, 45, 'string']));

// Задача 3. Узагальнена функція pair
// Умова

// Створи функцію pair, яка:

// приймає два значення, які можуть бути різного типу

// повертає їх як масив або кортеж [перший, другий]

// Зроби функцію узагальненою

//

// const pair = <T1, T2>(x: T1, y: T2): (T1| T2)[] => {
// const pair = <T1, T2>(x: T1, y: T2): [T1, T2] => {
//   return [x, y];
// };
// console.log(pair<number, string>(1, '2'));

// Задача 5. Узагальнена функція firstOrDefault
// Умова

// Створи функцію firstOrDefault, яка:

// приймає масив будь-якого типу

// повертає перший елемент масиву або null, якщо масив порожній

// зроби функцію узагальненою

//

// const firstOrDefault = <T>(arr: T[]): null | T => arr[0] || null;

// console.log(firstOrDefault([]));
// console.log(firstOrDefault<number | string>([1, 2, 3, 'house']));

// interface Todo {
//   name: string;
// }

// interface Response<T> {
//   status: number;
//   message: string;
//   data: T;
// }

// interface OneTodoResp {
//   status: number;
//   message: string;
//   data: Todo;
// }
// interface TodoResp {
//   status: number;
//   message: string;
//   data: Todo[];
// }

// const todoResp: Response<Todo[]> = {
//   status: 200,
//   message: 'success',
//   data: [{ name: 'Alex' }, { name: 'Vlad' }],
// };

// const oneTodoResp: Response<Todo> = {
//   status: 200,
//   message: 'success',
//   data: { name: 'Alex' },
// };

// Задача 7. Узагальнена функція delay з Promise
// Умова

// Створи функцію delay, яка:

// приймає значення будь-якого типу

// приймає час у мілісекундах

// повертає Promise, який після затримки повертає передане значення

// зроби функцію узагальненою

//

// const delay = <T>(query: T, ms: number): Promise<T> => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(query);
//     }, ms);
//   });
// };

// delay<string>('param', 1000).then(value => {
//   console.log(value);
// });

// Задача 8. Узагальнена функція fetchData з Axios
// Умова

// Створи функцію fetchData, яка:

// приймає URL

// робить GET-запит через axios

// повертає масив об’єктів певного типу, який визначається узагальненням

//
import axios, { type AxiosResponse } from 'axios';

const fetchData = async <T>(url: string): Promise<T[]> => {
  const { data } = await axios.get<T[]>(url);

  return data;
};

fetchData('https://jsonplaceholder.typicode.com/posts').then(data => {
  console.log(data);
});


// ! Задача 9. Узагальнена функція zip
// Умова
// Створи функцію zip, яка:
// приймає два масиви різного типу
// повертає масив кортежів
// якщо масиви різної довжини, ігнорує зайві елементи
// зроби функцію узагальненою



function zip<T, U>(array1: T[], array2: U[]): [T, U][] { 
  const length = Math.min(array1.length, array2.length);
  const result: [T, U][] = [];

  for (let i = 0; i < length; i++) {
    result.push([array1[i], array2[i]]);
  }
  return result;
}
const numbers = [1, 2, 3];
const strings = ["a", "b"];
const zipped = zip(numbers, strings); // [[1,"a"], [2,"b"]]
console.log(zipped);

// Приклад використання:
// const numbers = [1, 2, 3];
// const strings = ["a", "b"];
// const zipped = zip(numbers, strings); // [[1,"a"], [2,"b"]]


//! Задача 10. Узагальнені функції saveToStorage і loadFromStorage
// Умова
// Створи дві функції:
// 1) saveToStorage
// приймає ключ
// приймає значення будь-якого типу
// зберігає його у localStorage у форматі JSON
// 2) loadFromStorage
// приймає ключ
// повертає значення
// Зроби обидві функції узагальненими.

function saveToStorage<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value));
}
interface User {
  name: string;
  age: number;
}
saveToStorage<User>("user", { name: "Ivan", age: 32 });
// { name: "Ivan", age: 32 }

function loadFromStorage<T>(key: string): T | null {
  const data = localStorage.getItem(key);
  return data === null ? null : JSON.parse(data);
}
console.log(loadFromStorage<User>("user"));

// if (data === null) {
//     return null;
//   }
//   return JSON.parse(data);