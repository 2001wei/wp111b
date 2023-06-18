function vadd(a, b) {
  if (a.length !== b.length) {
    throw new Error("向量的維度不一致");
  }

  const result = [];

  for (let i = 0; i < a.length; i++) {
    result.push(a[i] + b[i]);
  }

  return result;
}
