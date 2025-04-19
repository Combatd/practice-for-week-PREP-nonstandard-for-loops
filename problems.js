function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    if (arr.length < 2) {
      return [];
    } 
    const oddIndexArray = [];

    for (let i = 1; i < arr.length; i += 2){
      oddIndexArray.push(arr[i]);
    }
    return oddIndexArray;
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    if (arr.length < 2) {
      return [];
    }
    const oddIndexArray = [];

    for (let i = 1; i < arr.length; i += 2) {
      oddIndexArray.unshift(arr[i]);
    }

    return oddIndexArray;
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // power of 2: n(n - 1) = 0
    const powersOfTwoArr = [];
    // can't multiply by 0 value
    for (let i = 1; i < arr.length; i *= 2) {
      powersOfTwoArr.push(arr[i]); // the current element will be a power of 2
    }

    return powersOfTwoArr;
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    const powersOfN = [];

    for (let i = 0; i < arr.length; i += n) {
      powersOfN.push[arr[i]];
    }

    return powersOfN;
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
    const firstHalfArr = [];

    for (let i = 0; i < arr.length / 2; i++) {
      let currentElement = arr[i];
      firstHalfArr.push(currentElement);
    }

    return firstHalfArr;
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
    const secondHalfArr = [];

    for (let i = arr.length - 1; i >= arr.length / 2; i--) {
      let currentElement = arr[i];
      secondHalfArr.push(currentElement);
    }

    return secondHalfArr;
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}