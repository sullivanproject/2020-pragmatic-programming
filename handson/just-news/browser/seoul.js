const title = document.querySelector('#main > h1').innerText
const timeStamp = document.querySelector('.date').innerText
const reporter = document.querySelector('.user').innerText
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
}`
document.body.append(style)

const article = document.querySelector('article')

article.append(content)
article.insertAdjacentHTML('afterbegin', `<p>${reporter}</p>`)
article.insertAdjacentHTML('afterbegin', `<p class="time-stamp">${timeStamp}</p>`)
article.insertAdjacentHTML('afterbegin', `<h1>${title}</h1>`)