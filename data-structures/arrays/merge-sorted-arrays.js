// mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
// [0,3,4,4,6,30,31];

// 1. Built in JS methods

const mergeSortedArrays = (arr1, arr2) => {
  if (!arr1 || !arr2) {
    console.log("Please enter valid input");
  }

  return arr1.concat(arr2).sort((a, b) => {
    return a - b;
  });
};

// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));

// 2. Iteration

const mergeSortedArrays2 = (arr1, arr2) => {
  if (!arr1 || !arr2) {
    console.log("Please enter valid input");
  }

  for (let number of arr2) {
    arr1.push(number);
  }

  arr1.sort((a, b) => {
    return a - b;
  });

  return arr1;
};

// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));

// 3. While loop

const mergeSortedArrayszz = (arr1, arr2) => {
  let mergedArray = [];
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }
  let array1ItemOne = arr1[0];
  let array2ItemOne = arr2[0];
  let i = 1;
  let j = 1;

  while (array1ItemOne || array2ItemOne) {
    console.log(array1ItemOne, array2ItemOne);
    if (!array2ItemOne || array1ItemOne < array2ItemOne) {
      mergedArray.push(array1ItemOne);
      array1ItemOne = arr1[i];
      i++;
    } else {
      mergedArray.push(array2ItemOne);
      array2ItemOne = arr2[j];
      j++;
    }
  }

  return mergedArray;
};

console.log(mergeSortedArrayszz([0, 3, 4, 31], [3, 4, 6, 30]));
