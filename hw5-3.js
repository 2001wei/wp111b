//參考chatgpt
function truthTable(n) {
    const table = [];
    const rows = Math.pow(2, n);
  
    for (let i = 0; i < rows; i++) {
      const row = [];
  
      for (let j = n - 1; j >= 0; j--) {
        row.push((i >> j) & 1);
      }
  
      table.push(row);
    }
  
    return table;
  }
  