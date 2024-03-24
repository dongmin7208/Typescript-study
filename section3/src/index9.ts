// 서로소 유니온 타입
// 교집합이 없는 타입들로만 만든 유니온 타입을 말함

type OnlyNumber = string | number;
type OnlyString = boolean | string;

type Admin = {
  tag: "admin";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "member";
  name: string;
  point: number;
};

type Guest = {
  tag: "guest";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// Admin -> name, kickCount
// Member -> name, point
// Guest -> name, visitCount
function login(user: User) {
  if ("kickCount" in user) {
    console.log(`${user.name} has kicked ${user.kickCount} times`);
  } else if ("point" in user) {
    console.log(`${user.name} has kicked ${user.point} times`);
  } else {
    console.log(`${user.name} has kicked ${user.visitCount} times`);
  }
}

// /switch

function login2(user: User) {
  switch (user.tag) {
    case "admin":
      console.log(`${user.name} has kicked ${user.kickCount} times`);
      break;
    case "member":
      console.log(`${user.name} has kicked ${user.point} times`);
      break;
    case "guest":
      console.log(`${user.name} has kicked ${user.visitCount} times`);
      break;
  }
}

// // 서로소 유니온 타입
// // 교집합이 없는 타입들로만 만든 유니온 타입을 말함

// type OnlyNumber = string | number;
// type OnlyString = boolean | string;

// type Admin = {
//   name: string;
//   kickCount: number;
// };

// type Member = {
//   name: string;
//   point: number;
// };

// type Guest = {
//   name: string;
//   visitCount: number;
// };

// type User = Admin | Member | Guest;

// // Admin -> name, kickCount
// // Member -> name, point
// // Guest -> name, visitCount
// function login(user: User) {
//   if ("kickCount" in user) {
//     console.log(`${user.name} has kicked ${user.kickCount} times`);
//   } else if ("point" in user) {
//     console.log(`${user.name} has kicked ${user.point} times`);
//   } else {
//     console.log(`${user.name} has kicked ${user.visitCount} times`);
//   }
// }
