function mmul(a, b) {
  if (a[0].length !== b.length) {
    throw new Error("矩陣的維度不符合相乘要求");
  }

  const rows = a.length;
  const columns = b[0].length;
  const sharedDim = a[0].length;
  const result = [];

  for (let i = 0; i < rows; i++) {
    const row = [];

    for (let j = 0; j < columns; j++) {
      let sum = 0;

      for (let k = 0; k < sharedDim; k++) {
        sum += a[i][k] * b[k][j];
      }

      row.push(sum);
    }

    result.push(row);
  }

  return result;
}
