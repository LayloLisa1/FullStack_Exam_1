function doubleFactorial(num) {
    if (num <= 1) {
        return 1;
    }
    if (num % 2 !== 0) {
        return num * doubleFactorial(num - 2);
    }
    return doubleFactorial(num - 1);
}


console.log(doubleFactorial(9)); 
console.log(doubleFactorial(7)); 
console.log(doubleFactorial(5)); 
console.log(doubleFactorial(3)); 
console.log(doubleFactorial(1)); 
