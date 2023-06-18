function madd(a, b) {
  if (a.length !== b.length || a[0].length !== b[0].length) {
    throw new Error("矩陣的維度不一致");
  }

  const rows = a.length;
  const columns = a[0].length;
  const result = [];

  for (let i = 0; i < rows; i++) {
    const row = [];

    for (let j = 0; j < columns; j++) {
      row.push(a[i][j] + b[i][j]);
    }

    result.push(row);
  }

  return result;
}
