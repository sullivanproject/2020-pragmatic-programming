const optOutQueryKey = 'just_news'

function optOutUrl() {
  let query = window.location.search
  if (query) {
    query += `&${optOutQueryKey}=false`
  } else {
    query = `?${optOutQueryKey}=false`
  }
  return window.location.origin + window.location.pathname + query
}

function reconstruct(articleInfo, adSelectors) {
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
    .time-stemp {
    color: #888;
    font-size: 10pt;
    text-align: left;
    }
    `
  document.body.append(style)

  const article = root.querySelector('article')

  article.append(articleInfo.content)

  for (const adSelector of adSelectors) {
    const element = article.querySelector(adSelector)
    if (element === null) {
      continue
    }
    element.remove()
  }
  article.insertAdjacentHTML(
    'afterbegin',
    `<p>작성자: ${articleInfo.repoter}</p>`
  )
  article.insertAdjacentHTML(
    'afterbegin',
    `<p class="time-stemp">작성일: ${articleInfo.timeStemp}</p>`
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
    title: '.headline',
    timeStemp: '.publish',
    repoter: '.author--name',
    content: '.article--content',
  },
}

const sitesAd = {
  'mediahub.seoul.go.kr': [],
  'www.bloter.net': [
    '.article--content-ad__container',
    '.denim-shortcode--title',
    '.bloter-plus--article',
    '.related-post--article',
    '.goog-te-banner',
    '#goog-gt-tt',
  ],
}

const site = sites[location.hostname]
const adSelectors = sitesAd[location.hostname]

const articleInfo = {
  title: document.querySelector(site.title).innerText,
  timeStemp: document.querySelector(site.timeStemp).innerText,
  repoter: document.querySelector(site.repoter).innerText,
  content: document.querySelector(site.content).cloneNode(true),
}

reconstruct(articleInfo, adSelectors)
