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
