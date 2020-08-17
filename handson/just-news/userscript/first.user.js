// ==UserScript==
// @name   just-news-PoC
// @version 1
// @match http://mediahub.seoul.go.kr/archives/*
// @run-at document-end
// @exclude *?just_news=false
// ==/UserScript==

const optOutQueryKey = 'just_news'

function getUrl() {
  let query = window.location.search
  if (query) {
    query += `&${optOutQueryKey}=false`
  } else {
    query = `?${optOutQueryKey}=false`
  }
  return window.location.origin + window.location.pathname + query
}

function reconstruct(articleInfo) {
  const root = document.createElement('html')
  document.replaceChild(root, document.documentElement)
  root.innerHTML = [
    '<head>',
    '<meta charset="utf-8">',
    '<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">',
    `<title>${articleInfo.title}</title>`,
    '</head>',
    '<body>',
    '<article>',
    '</article>',
    '</body>',
  ].join('')

  const style = document.createElement('style')
  style.innerHTML = `@import url('https://fonts.googleapis.com/css?family=Nanum+Gothic|Nanum+Myeongjo&display=swap');
    body {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 10px;
        margin-bottom: 60vh;
        text-align: center;
        font-family: 'Nanum Myeongjo', serif;
    }
    article {
    width: 640px;
    text-align: justify;
    }
    .time-stamp {
    color: #888;
    font-size: 10pt;
    text-align: left;
    }
    `
  document.body.append(style)

  const article = root.querySelector('article')

  article.append(articleInfo.content)
  article.insertAdjacentHTML(
    'afterbegin',
    `<p>작성자: ${articleInfo.reporter}</p>`
  )
  article.insertAdjacentHTML(
    'afterbegin',
    `<p class="time-stamp">작성일: ${articleInfo.timeStamp}</p>`
  )
  article.insertAdjacentHTML('afterbegin', `<h1>${articleInfo.title}</h1>`)
  article.insertAdjacentHTML(
    'afterbegin',
    `<a href=${getUrl()}>원본 페이지 보기</a>`
  )
}

const site = {
  title: '#main > h1',
  timeStamp: '.date',
  reporter: '.user',
  content: '.pf-content',
}

const articleInfo = {
  title: document.querySelector(site.title).innerText,
  timeStamp: document.querySelector(site.timeStamp).innerText,
  reporter: document.querySelector(site.reporter).innerText,
  content: document.querySelector(site.content).cloneNode(true),
}

reconstruct(articleInfo)
