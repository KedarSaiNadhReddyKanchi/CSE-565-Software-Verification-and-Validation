const heapsort = require("./heapsort");

test('heapsort test case 1', () => {
    expect(heapsort.heapsort_code([12, 11, 13, 5, 6, 7])).toEqual([ 5, 6, 7, 11, 12, 13 ]);
});

test('heapsort test case 2', () => {
    expect(heapsort.heapsort_code([4,1,3,9,7])).toEqual([ 1,3,4,7,9 ]);
});

test('heapsort test case 3', () => {
    expect(heapsort.heapsort_code([10,9,8,7,6,5,4,3,2,1])).toEqual([ 1, 2,3,4,5,6,7,8,9,10 ]);
});

test('heapsort test case 4', () => {
    expect(heapsort.heapsort_code([])).toEqual([]);
});

test('heapsort test case 5', () => {
    expect(heapsort.heapsort_code(["banana", "apple", "mango", "pineapple", "orange"])).toEqual(["apple", "banana", "mango", "orange", "pineapple"]);
});

test('heapsort test case 6', () => {
    expect(heapsort.heapsort_code(["CAB", "ACB", "BCA", "ABC", "CBA", "BAC"])).toEqual(["ABC", "ACB", "BAC", "BCA", "CAB", "CBA"]);
});

test('heapsort test case 7', () => {
    expect(heapsort.heapsort_code([5,3,3,1,5,3,2])).toEqual([1,2,3,3,3,5,5]);
});

test('heapsort test case 8', () => {
    expect(heapsort.heapsort_code(['5','3','3','1','5','3','2'])).toEqual(['1','2','3','3','3','5','5']);
});

test('heapsort test case 9', () => {
    expect(heapsort.heapsort_code(["M4dkbH6NjJ", "1XSRJpa60H", "hxWwGbcMJM", "PjMgcuKxsO", "AWVQ1I3pZs", "6I4vODbmk8", "LjeMBnEqr1", "lnJnShEBE6", "RJzCi0UcRE", "IOvB93CeP9"])).
    toEqual(["1XSRJpa60H", "6I4vODbmk8", "AWVQ1I3pZs", "IOvB93CeP9", "LjeMBnEqr1", "M4dkbH6NjJ", "PjMgcuKxsO", "RJzCi0UcRE", "hxWwGbcMJM", "lnJnShEBE6"]);
});

test('heapsort test case 10 - checking to fail', () => {
    expect(heapsort.heapsort_code([4,1,3,9,7])).toEqual([ 1,7,4,3,9 ]);
});