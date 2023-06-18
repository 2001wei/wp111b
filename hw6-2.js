function vdot(a, b) {
  if (a.length !== b.length) {
    throw new Error("向量的維度不一致");
  }

  let result = 0;

  for (let i = 0; i < a.length; i++) {
    result += a[i] * b[i];
  }

  return result;
}
