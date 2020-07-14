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
  article.insertAdjacentElement('afterbegin', articleInfo.repoter)
  article.insertAdjacentElement('afterbegin', articleInfo.timeStemp)
  article.insertAdjacentElement('afterbegin', articleInfo.title)
  article.insertAdjacentHTML(
    'afterbegin',
    `<a href=${optOutUrl()}>원본 페이지 보기</a>`
  )
}

const articleInfo = {
  title: document.querySelector('#main > h1').cloneNode(true),
  timeStemp: document.querySelector('.date').cloneNode(true),
  repoter: document.querySelector('.user').cloneNode(true),
  content: document.querySelector('.pf-content').cloneNode(true),
}

if (!isOptOut()) {
  reconstruct(articleInfo)
}
