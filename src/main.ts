// primetive

// let a = 'Hello';
// let b = 5;
// let c = true;

//
let a: string = 'Hello';
let b: number = 5;
let c: boolean = true;

// let d = null;
// let e = undefined;

let d: null = null;
let e: undefined = undefined;

let g;
g = 5;
g.toFixed(2);

let f: unknown;

f = 5;
// f.toFixed(2); error
if (typeof f === 'number') {
  f.toFixed(2);
}
// _________ \\

// Object

interface Car {
  readonly VIN: string;
  engine: string;
  color: string;
  weight?: number;
  number: string;
}

const car: Car = {
  VIN: 'EH3432h342jJ32kk',
  engine: 'v8',
  color: 'red',
  weight: 2000,
  number: 'AX8472AA',
};

// ________

const carImport: Car = {
  VIN: 'EH3432h3das21jJd22kk',
  engine: 'v12',
  color: 'green',
  number: 'PL3676XC',
};

car.color = 'orange';

//__ union-task __\\

// number|string

// interface User {
//   name: string;
//   email: string;
// }

// let user: null | User = null;

// user = {
//   name: 'Vlad',
//   email: 'vlados@gmail.com',
// };

// type Status = 'pending' | 'fulfilled' | 'rejected';

// let status: Status = 'pending';
// status = 'fulfilled';

//array
const numbers: number[] = [1, 2, 3];
// const numbers: Array<number> = [1, 2, 3];

// const arr1: (number | string)[] = [56, "word", 46];

// type Values = boolean | number | string;

// const arr2: Values[] = [true, "hello", 43, false];

// interface User {
//   name: string;
//   age: number;

// }
// const arr3: User[] = [
//   { name: "Ivan", age: 21 },
//   { name: "Petro", age: 26 },
// ];

//functions

// 1. Просте додавання чисел

// Умова:
// Напиши функцію add, яка приймає два числа та повертає їх суму.

const add = (x: number, y: number): number => {
  return x + y;
};

add(1, 2);

// 2. Привітання користувача

// Умова:
// Функція greetUser приймає ім’я (string) і логічне значення isMorning (boolean).
// Повертає рядок "Good morning, {name}" якщо isMorning === true, і "Hello, {name}" якщо false.

const greetUser = (name: string, isMorning: boolean): string => {
  if (isMorning) {
    return `Good morning, ${name}`;
  }
  return `Hello, ${name}`;
};

greetUser('Olexandr', true);

// 3. Перевірка числа

// Умова:
// Функція isPositive приймає будь-яке значення (unknown) і повертає boolean:

// true якщо це число > 0,

// false якщо число ≤ 0 або не число.

const isPositive = (arg: unknown): boolean => {
  if (typeof arg !== 'number') {
    return false;
  }
  return arg > 0;
};

isPositive(5);

// 4. Об’єкт користувача

// Умова:
// Створи інтерфейс User з полями:

// name: string

// age: number

// email?: string (optional)

// Функція getUserSummary приймає об’єкт User та повертає рядок "Name: {name}, Age: {age}, Email: {email}".
// Якщо email немає — виводимо "Email: N/A".

interface User {
  name: string;
  age: number;
  email?: string;
}

const getUserSummary = ({ name, age, email }: User): string => {
  return `Name: ${name}, Age: ${age}, Email: ${email ?? 'N/A'}`;
};

const user11 = {
  name: 'Anny',
  age: 25,
};
getUserSummary(user11);

// 5. Масив чисел

// Умова:
// Функція sumArray приймає масив чисел number[] і повертає їхню суму.

const sumArray = (array: number[]): number => {
  return array.reduce((acc, elem) => {
    return acc + elem;
  }, 0);
};

sumArray([1, 2, 3, 4, 5]);

// 6. Масив рядків або чисел

// Умова:
// Функція joinArray приймає масив, елементи якого можуть бути string або number ((string | number)[])
// і повертає рядок з усіх елементів, розділених комою.
const joinArray = (array: (string | number)[]) => {
  return array.join(', ');
};

joinArray([1, 1, 2, 'hello']);

// 7. Функція з readonly полем

// Умова:
// Інтерфейс Point:

interface Point {
  readonly x: number;
  readonly y: number;
}

// Функція distanceFromOrigin приймає Point і повертає відстань до початку координат (Math.sqrt(x*x + y*y)).
const distanceFromOrigin = ({ x, y }: Point): number => {
  return Math.sqrt(x * x + y * y);
};

distanceFromOrigin({ x: 1, y: 3 });

// 8. Фільтр користувачів за віком

// Умова:
// Інтерфейс User2:

interface User2 {
  name: string;
  age: number;
  isAdmin?: boolean;
}

// Функція filterAdults приймає масив User2[] і повертає масив користувачів віком ≥ 18.
const filterAdults = (array: User2[]) => {
  return array.filter(({ age }) => age >= 18);
};

filterAdults([{ name: 'Ivan', age: 25, isAdmin: false }]);

// 9. Об’єднання union типів

// Умова:
// Функція formatValue приймає параметр value: string | number | boolean і повертає рядок:

// якщо boolean — "true"/"false",

// якщо number — "Number: {value}",

// якщо string — "String: {value}".
const formatValue = (value: string | number | boolean): string => {
  if (typeof value === 'boolean') {
    return value ? 'true' : 'false';
  }

  if (typeof value === 'number') return `Number: ${value}`;

  return `String: ${value}`;
};

formatValue('hello');
formatValue(15);

// 10. Масив невідомого типу

// Умова:
// Функція countNumbers приймає масив unknown[] і повертає кількість чисел у масиві.
const countNumbers = (array: unknown[]): number => {
  // let counter = 0;

  // for (const elem of array) {
  //   if (typeof elem === 'number') {
  //     counter++;
  //   }
  // }

  // return counter;
  return array.filter(elem => typeof elem === 'number').length;
};

countNumbers([1, 2, 4, 'hello', [1, 2, 3]]);
