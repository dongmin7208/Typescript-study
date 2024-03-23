// // any
// let any1: any = 123;
// let any2: any = "123";
// let any3: any = true;
// any1 = false;
// unknown
let unknownVar;
unknownVar = "";
unknownVar = 123;
unknownVar = () => { };
// unknownVar.toUpperCase();
if (typeof unknownVar === "string") {
    unknownVar.toUpperCase();
}
export {};
