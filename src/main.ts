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

interface User {
  name: string;
  email: string;
}

let user: null | User = null;

user = {
  name: 'Vlad',
  email: 'vlados@gmail.com',
};

type Status = 'pending' | 'fulfilled' | 'rejected';

let status: Status = 'pending';
status = 'fulfilled';
