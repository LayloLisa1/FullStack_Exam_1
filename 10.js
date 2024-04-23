function identityMatrix(size) {
    if (size <= 0) {
        return [];
    }
    const identity = [];
    for (let i = 0; i < size; i++) {
        const row = [];
        for (let j = 0; j < size; j++) {            
            row.push(i === j ? 1 : 0);
        }
        identity.push(row);
    }

    return identity;
}
console.log(identityMatrix(1)); // ➞ [[1]]
console.log(identityMatrix(2)); // ➞ [[1, 0],
                                //    [0, 1]]
console.log(identityMatrix(5)); // ➞ [[1, 0, 0, 0, 0],
                                //    [0, 1, 0, 0, 0],
                                //    [0, 0, 1, 0, 0],
                                //    [0, 0, 0, 1, 0],
                                //    [0, 0, 0, 0, 1]]
