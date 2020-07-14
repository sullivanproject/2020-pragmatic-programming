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

if (!isOptOut()) {
  const title = document.querySelector('#main > h1').cloneNode(true)
  const timeStemp = document.querySelector('.date').cloneNode(true)
  const repoter = document.querySelector('.user').cloneNode(true)
  const content = document.querySelector('.pf-content').cloneNode(true)

  const root = document.createElement('html')
  document.replaceChild(root, document.documentElement)
  root.innerHTML = [
    '<head>',
    '<meta charset="utf-8">',
    '<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">',
    `<title>${title}</title>`,
    '</head>',
    '<body>',
    '<article>',
    '</article>',
    '</body>',
  ].join('')

  const article = document.querySelector('article')

  article.append(content)
  article.insertAdjacentElement('afterbegin', repoter)
  article.insertAdjacentElement('afterbegin', timeStemp)
  article.insertAdjacentElement('afterbegin', title)
  article.insertAdjacentHTML(
    'afterbegin',
    `<a href=${optOutUrl()}>원본 페이지 보기</a>`
  )
}
