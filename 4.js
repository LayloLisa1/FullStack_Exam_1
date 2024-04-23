function removeABC(str) {
    if (!str.match(/[abc]/)) {
        return null;
    }    
    return str.replace(/[abc]/g, ' ');
}


console.log(removeABC("abcdef")); 
console.log(removeABC("Hello World"));
console.log(removeABC("apple")); 
console.log(removeABC("banana")); 
console.log(removeABC("cab"));
