// array
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["a", "b", "c"];

let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// tuple
// 배열의 길이가 고정되고 각 요소의 타입이 정해진 배열
let tup1: [number, number] = [1, 2];
// tup1 = [1,2,3]; // Error

let tup2: [number, string, boolean] = [1, "2", true];

const users: [string, number][] = [
  ["name", 123],
  ["name2", 1234],
  ["name3", 12345],
  ["name4", 123456],
  // [5, "name5"],
];
// const users =[
//   ["name", 123],
//   ["name2", 1234],
//   ["name3", 12345],
//   ["name4", 123456],
//   [5, "name5"],
// ]
