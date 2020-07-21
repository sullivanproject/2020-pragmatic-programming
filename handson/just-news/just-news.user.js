// ==UserScript==
// @name   just-news-PoC
// @version 1
// @match http://mediahub.seoul.go.kr/archives/*
// @match *://www.bloter.net/archives/*
// ==/UserScript==

const optOutQueryKey = 'just_news'

function isOptOut() {
  return window.location.search.indexOf(`${optOutQueryKey}=false`) !== -1
}
function optOutUrl() {
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

  const article = root.querySelector('article')

  article.append(articleInfo.content)
  article.insertAdjacentHTML(
    'afterbegin',
    `<span>${articleInfo.repoter}</span>`
  )
  article.insertAdjacentHTML(
    'afterbegin',
    `<span>${articleInfo.timeStemp}</span>`
  )
  article.insertAdjacentHTML('afterbegin', `<h1>${articleInfo.title}</h1>`)
  article.insertAdjacentHTML(
    'afterbegin',
    `<a href=${optOutUrl()}>원본 페이지 보기</a>`
  )
}

const sites = {
  'mediahub.seoul.go.kr': {
    title: '#main > h1',
    timeStemp: '.date',
    repoter: '.user',
    content: '.pf-content',
  },
  'www.bloter.net': {
    title: 'h1.headline',
    timeStemp: '.publish',
    repoter: '.author--name',
    content: '.article--content',
    // TODO: 컨텐츠 내부 광고 지우기
    // contentAds: ['wp_adbn_root'],
  },
}

const site = sites[location.hostname]

const articleInfo = {
  title: document.querySelector(site.title).innerText,
  timeStemp: document.querySelector(site.timeStemp).innerText,
  repoter: document.querySelector(site.repoter).innerText,
  content: document.querySelector(site.content).cloneNode(true),
}

window.addEventListener('load', () => {
  if (!isOptOut()) {
    reconstruct(articleInfo)
  }
})
