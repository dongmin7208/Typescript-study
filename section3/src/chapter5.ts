import { Dog, Person } from "./chapter4";

type Intersection = Dog & Person;

let intersection1: Intersection = {
  name: "dog",
  color: "brown",
  language: "korean",
};
