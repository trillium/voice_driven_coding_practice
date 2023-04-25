import { test, expect } from "vitest";
import { validAnagram } from "./validAnagram.js";

test("passes simple", () => {
  expect(validAnagram("a", "a")).toBe(true);
  expect(validAnagram("a", "ab")).toBe(false);
  expect(validAnagram("anagram", "nagaram")).toBe(true);
});
