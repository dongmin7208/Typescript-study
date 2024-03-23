// void
// void -> void
// void -> 아무것도 없음을 의미하는 타입
function func1() {
    return "hello";
}
function func2() {
    console.log("hello");
}
// function func1(): void {
//   console.log('hello');
// }
// never
// nver -> 존재하지 않는
// 불가능한 타입
function func3() {
    throw new Error();
}
export {};
