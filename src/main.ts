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
}

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
  

}

greetUser('Olexandr', true);


// 3. Перевірка числа

// Умова:
// Функція isPositive приймає будь-яке значення (unknown) і повертає boolean:

// true якщо це число > 0,

// false якщо число ≤ 0 або не число.

const isPositive = (arg: unknown): boolean => {
  if (typeof arg !== "number") {
    return false;
  }
  return arg > 0;
}

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
 
  return `Name: ${name}, Age: ${age}, Email: ${email ?? "N/A"}`
}


const user11 = {
  name: "Anny",
  age: 25,
}
getUserSummary(user11);