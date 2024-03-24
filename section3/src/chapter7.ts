type Person = {
  name: string;
  age: number;
};

// let person = {};
// let person : any= {}; xxxxxxxx
let person = {} as Person;
person.name = "name";
person.age = 10;
