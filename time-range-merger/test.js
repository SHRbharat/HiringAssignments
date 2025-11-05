const { mergeTimeRanges } = require('./mergeTimeRanges.js');

//Test Case 1
const test1 = {
  ranges: [
    [1000, 2000],
    [2500, 4000],
    [3900, 4100],
    [8000, 9000],
    [9050, 9500]
  ],
  threshold: 200,
  expected: [
    [1000, 2000],
    [2500, 4100],
    [8000, 9500]
  ]
};

//Test Case 2
const test2 = {
  ranges: [
    [0, 10],
    [15, 20],
    [25, 30]
  ],
  threshold: 4,
  expected: [
    [0, 10],
    [15, 20],
    [25, 30]
  ]
};

//Test Case 3
const test3 = {
  ranges: [
    [0, 10],
    [12, 15],
    [17, 25],
    [27, 35]
  ],
  threshold: 3,
  expected: [
    [0, 35]
  ]
};


function runTest(name, { ranges, threshold, expected }) {
  const output = mergeTimeRanges(ranges, threshold);
  console.log(`\n${name}`);
  console.log("Generated Output:", output);
  console.log("Expected Output :", expected);
}

runTest("Test 1", test1);
runTest("Test 2", test2);
runTest("Test 3", test3);
