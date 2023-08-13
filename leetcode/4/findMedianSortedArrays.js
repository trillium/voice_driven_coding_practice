export function findMedianSortedArrays(nums1, nums2) {
  // merge the arrays
  const combined = [...nums1, ...nums2].sort((a, b) => a - b)
  const mid = Math.floor(combined.length / 2)
  // if the combined length is even, the median is the average of the two middle numbers
  // otherwise, the median is the middle number
  const median =
    combined.length % 2 === 0
      ? (combined[mid - 1] + combined[mid]) / 2
      : combined[mid]
  return median
}
