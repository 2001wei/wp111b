function countOccurrences(words) {
  const countMap = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    countMap[word] = (countMap[word] || 0) + 1;
  }

  return countMap;
}
