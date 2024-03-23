// enum
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
var Role;
(function (Role) {
    // ADMIN = 0,
    // USER = 1,
    // GUEST = 2,
    //
    // ADMIN,
    // USER,
    // GUEST,
    //
    Role[Role["ADMIN"] = 10] = "ADMIN";
    Role[Role["USER"] = 11] = "USER";
    Role[Role["GUEST"] = 12] = "GUEST";
})(Role || (Role = {}));
var Language;
(function (Language) {
    Language["KOREAN"] = "ko";
    Language["ENGLISH"] = "en";
    Language["JAPANESE"] = "jp";
})(Language || (Language = {}));
const user1 = {
    name: "Neo",
    // role: 0, // <- 0: admin, 1: user
    role: Role.ADMIN,
    Language: Language.KOREAN,
};
const user2 = {
    name: "Amy",
    // role: 1, // <- 0: admin, 1: user
    role: Role.USER,
};
const user3 = {
    name: "Evan",
    // role: 0, // <- 0: admin, 1: user
    role: Role.GUEST,
};
console.log(user1, user2, user3);
export {};
