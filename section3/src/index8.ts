type Person = {
  name: string;
  age: number;
};

function fun(value: number | string | Date | null | Person) {
  if (typeof value === "number") {
    console.log("number");
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.toISOString());
  } else if (value && "age" in value) {
    console.log(`${value.name} ${value.age} years old`);
  }
}
