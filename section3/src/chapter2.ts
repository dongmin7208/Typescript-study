let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "kirin",
  color: "yellow",
};

let dog: Dog = {
  name: "dog",
  color: "brown",
  breed: "poodle",
};

animal = dog;

// dog = animal;

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "JS Programming",
  price: 10000,
  skill: "javascript",
};

book = programmingBook;
// programmingBook = book;
