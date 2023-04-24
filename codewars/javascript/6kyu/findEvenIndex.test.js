import { test, expect } from "vitest";
import { findEvenIndex } from "./findEvenIndex.js";

test("should pass some sample tests", () => {
  expect(findEvenIndex([1, 2, 3, 4, 3, 2, 1])).toBe(3); // "The array was: [1,2,3,4,3,2,1] \n");
  expect(findEvenIndex([1, 100, 50, -51, 1, 1])).toBe(1); // "The array was: [1,100,50,-51,1,1] \n");
  expect(findEvenIndex([1, 2, 3, 4, 5, 6])).toBe(-1); // "The array was: [1,2,3,4,5,6] \n");
  expect(findEvenIndex([20, 10, 30, 10, 10, 15, 35])).toBe(3); // "The array was: [20,10,30,10,10,15,35] \n");
});
