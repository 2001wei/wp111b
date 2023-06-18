function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
let main = document.querySelector('#main')

let pages = {
    '#login':`
    <h1>登入</h1>
    <input type="text" placeholder="帳號"/><br/>
    <input type="password" placeholder="密碼"/><br/>
    <input type="button" value="登入"/><br/>
    `,
    '#logout':`
    <p>您已登出成功</p>
    `,
    '#signup':`
    <h1>註冊</h1>
    <input type="text" placeholder="姓名"/><br/>
    <input type="text" placeholder="帳號"/><br/>
    <input type="password" placeholder="密碼"/><br/>
    <input type="email" placeholder="email"/><br/>
    <input type="text" placeholder="血型"/><br/>
    <input type="date" placeholder="生日"/><br/>
    <input type="button" value="註冊"/><br/>
    `,
    '#home':`
    <h1>首頁</h1>
    <p>本網頁可以按功能表去切換畫面</p>
    `,
}
window.onhashchange = function () {
    let hash = window.location.hash
    main.innerHTML = pages[hash]
}
  window.onclick = function (e) {
    if (!e.target.matches('.dropbtn')) {
      var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }