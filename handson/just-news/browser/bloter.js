const title = document.querySelector('h1.headline').innerText
const timeStamp = document.querySelector('.publish').innerText
const reporter = document.querySelector('.author--name').innerText
const content = document.querySelector('.article--content').cloneNode(true)

const content_ad1 = document.querySelector('.article--content-ad__container')
const ad_title = document.querySelectorAll('.denim-shortcode--title')

const ad_article1 = document.querySelector('.bloter-plus--article')
const ad_article2 = document.querySelector('.related-post--article')

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
article.insertAdjacentHTML('afterbegin', `<p>${timeStamp}</p>`)
article.insertAdjacentHTML('afterbegin', `<h1>${title}</h1>`)

content_ad1.parentNode.removeChild(content_ad1)

ad_title.forEach(function(item) {
    item.parentNode.removeChild(item)
})
ad_article1.parentNode.removeChild(ad_article1)
ad_article2.parentNode.removeChild(ad_article2)