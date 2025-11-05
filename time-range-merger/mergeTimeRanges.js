/**
 * Merges discontinuous time ranges within a given threshold.
 * 
 * @param {Array<[number, number]>} ranges - Array of [start, end) ranges (unsorted, may overlap)
 * @param {number} threshold - Max gap (in ms) allowed between ranges to still be merged
 * @returns {Array<[number, number]>} - Sorted, non-overlapping merged ranges
 */


const mergeTimeRanges = (ranges, threshold) => {
  //base case
  if (!Array.isArray(ranges) || ranges.length === 0) return [];

  //Sort ranges by start time
  const sorted = [...ranges].sort((a, b) => a[0] - b[0]);

  const merged = [];
  let [currentStart, currentEnd] = sorted[0];

  for (let i = 1; i < sorted.length; i++) {
    const [nextStart, nextEnd] = sorted[i];

    //If next range overlaps or within threshold gap
    if (nextStart <= currentEnd + threshold) {
      //Extend current range
      currentEnd = Math.max(currentEnd, nextEnd);
    } else {
      //Push finished range and start a new
      merged.push([currentStart, currentEnd]);
      [currentStart, currentEnd] = [nextStart, nextEnd];
    }
  }

  //Push the last range
  merged.push([currentStart, currentEnd]);

  return merged;
};

module.exports = {
  mergeTimeRanges
};
