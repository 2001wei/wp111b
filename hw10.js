//參考chatgpt

const readline = require('readline');

// 建立 readline 介面
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 定義迴圈函數
function loop() {
  rl.question('請輸入指令（輸入 exit 離開）：', (command) => {
    if (command === 'exit') {
      rl.close();
    } else {
      // 在這裡處理指令
      console.log(`執行指令：${command}`);
      loop(); // 繼續迴圈
    }
  });
}

// 啟動迴圈
loop();
