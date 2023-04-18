import { test, expect } from "vitest";
import { odds } from "./odds.js";

test("Should handle empty array", () => {
  expect(odds([])).toEqual([]);
});
test("Should handle array with even numbers only", () => {
  expect(odds([2, 4, 6])).toEqual([]);
});
test("Should handle array with odd numbers only", () => {
  expect(odds([1, 3, 5])).toEqual([1, 3, 5]);
});
test("Should handle mixed array", () => {
  expect(odds([1, 2, 3, 4, 5, 6])).toEqual([1, 3, 5]);
});
