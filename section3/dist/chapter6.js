//  type 추론
let a = 10;
let b = "hello";
let c = {
    id: 1,
    name: "name",
    profile: {
        nickname: "nickname",
    },
    urls: ["https://naver.com", "https://google.com"],
};
let { id, name, profile: { nickname }, urls: [naver, google], } = c;
let [one, two, three] = [1, "hello", true];
function func(message = "hello") {
    return "hello";
}
// type 추론
let d;
d = 10;
d.toFixed();
// d.toUpperCase();
d = "hello";
d.toUpperCase();
// d.toFixed();
const num = 10;
const str = "hello";
let arr = [1, "string"];
export {};
