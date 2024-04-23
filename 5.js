function odamSoni(data) {
    let qolganOdam = 0;    
    for (let i = 0; i < data.length; i++) {
        let chiqqan = data[i][0];
        let tushgan = data[i][1];        
        qolganOdam += chiqqan - tushgan;
    } 
    return qolganOdam;
}

// Misollar
console.log(odamSoni([
    [10, 0],
    [3, 5],
    [5, 8]
   ])); // Output: 5
   console.log(odamSoni([
    [3, 0],
    [9, 1],
    [4, 8],
    [12, 2],
    [6, 1],
    [7, 8]
   ])); // Output: 21
