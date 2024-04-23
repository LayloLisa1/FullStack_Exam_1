function calculateSum(arr) {
    let sum = 0;
    let count = {};

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            break;
        }

        if (count[arr[i]] === undefined) {
            count[arr[i]] = 1;
        } else {
            count[arr[i]]++;
        }

        sum += Math.pow(arr[i], count[arr[i]]);
    }

    return sum;
}
console.log(calculateSum([2, 3, 2, 4, 2, 3, 0, 1, 2])); // Natija: 2^1 + 3^1 + 2^2 + 4^1 + 2^3 + 3^2 = 30
console.log(calculateSum([1, 2, 3, 4, 5])); // Natija: 1^1 + 2^1 + 3^1 + 4^1 + 5^1 = 15
console.log(calculateSum([1, 1, 1, 0, 1])); // Natija: 1^1 + 1^2 + 1^3 = 3

