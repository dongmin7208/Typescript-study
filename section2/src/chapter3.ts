// object
let user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "name",
};

user.id;

// let user: object = {
//   id: 1,
//   name: "name",
// }

// user.id; // Error

let dog: {
  name: string;
  color: string;
} = {
  name: "dog",
  color: "brown",
};

let config: {
  readonly apiKey: string;
} = {
  apiKey: "123",
};

// config.apiKey = '456'; // Error
