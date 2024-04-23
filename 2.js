function reverseInput(input) {
    if (typeof input === 'string') {
        return input.split(' ').reverse().join(' ');
    } else if (typeof input === 'number') {
        return parseInt(input.toString().split('').reverse().join(''));
    } else {
        return "Notog`ri kirish ma`lumoti! Faqat matn yoki raqam kiriting.";
    }
}
console.log(reverseInput("Hello world")); 
console.log(reverseInput(12345)); 
console.log(reverseInput("How are you?"));
console.log(reverseInput(true)); 