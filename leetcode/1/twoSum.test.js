import { test, expect } from "vitest";
import { twoSome } from "./twoSum.js";

test("passes simple", () => {
  expect(twoSome([1, 1, 2, 3], 5)).toStrictEqual([2, 3]);
  expect(twoSome([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
});
