function factorize(number) {
    if (number <= 0) {
        return [];
    }
    let factors = [];
    for (let i = 1; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            factors.push(i);
            if (i !== number / i) {
                factors.push(number / i);
            }
        }
    }
    factors.sort((a, b) => a - b);
    return factors;
}
console.log(factorize(12)); // ➞ [1, 2, 3, 4, 6, 12]
console.log(factorize(4)); // ➞ [1, 2, 4]
console.log(factorize(15)); // ➞ [1, 3, 5, 15]
console.log(factorize(17)); // ➞ [1, 17]

