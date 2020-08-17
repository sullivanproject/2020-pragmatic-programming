// ==UserScript==
// @name     kakao-pg
// @version  1
// @match https://pg-web.kakao.com/v1/*/info
// @match https://pg-web.kakao.com/v1/*/info#none
// ==/UserScript==

window.onload = () => {
  document.querySelector('#userPhone').value = '840301'
  document.querySelector('#userBirth').value = '01012345678'
  document.querySelector('button.btn_payask').click()
}
