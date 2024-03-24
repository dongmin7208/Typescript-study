/**
 * Unknown type
 */

function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  // let num: number = unknownVar;
  // let str: string = unknownVar;
  // let bool: boolean = unknownVar;
}

/**
 * Never type
 * - 함수가 절대로 반환하지 않는다는 것을 명시적으로 나타내는 타입
 * - 함수가 무한 루프에 빠지거나 에러를 던지는 경우에 사용
 * - void와 달리 변수에는 사용할 수 없음
 * - void는 함수에서 반환값이 없을 때 사용
 * - never는 함수에서 반환되지 않는 값의 타입을 나타낼 때 사용
 */
function neverExam() {
  function neverFunc(): never {
    while (true) {
      console.log("Hello");
    }
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // let never1: never = 10;
  // let never2: never = "hello";
  // let never3: never = true;
}

/**
 * void type
 */

function voidExam() {
  function voidFunc(): void {
    console.log("Hello");
  }

  let void1: void = undefined;
}
