function isAnagram(word1, word2) {
    word1 = word1.toLowerCase().replace(/[^a-z]/g, '');
    word2 = word2.toLowerCase().replace(/[^a-z]/g, '');
    if (word1.length !== word2.length) {
        return false;
    }
    const charCount = {};
    for (let char of word1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let char of word2) {
        if (!charCount[char]) {
            return false;
        }
        charCount[char]--;
    }

    return true;
}

console.log(isAnagram("tuk", "kut"));
console.log(isAnagram("olma", "mola")); 
console.log(isAnagram("Hello", "world")); 
console.log(isAnagram("Dormitory", "Dirty room")); 
