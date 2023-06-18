//參考chatgpt
function isPrime(n) {
    if (n <= 1) {
      return false;
    }
    
    // 檢查從2到n-1之間是否存在n的因數
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    
    return true;
  }
  