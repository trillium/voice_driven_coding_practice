export function validAnagram(s, t) {
  if (s.length !== t.length) return false;
  const s_sorted = s.split("").sort();
  const t_sorted = t.split("").sort();
  return s_sorted.sort().join("") === t_sorted.sort().join("");
}
