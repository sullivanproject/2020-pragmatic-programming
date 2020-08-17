const bookmark = '.btn_important.on'

const interval = setInterval(function () {
  const items = document.querySelectorAll('.mail_item')
  for (const item of items) {
    if (item.querySelector(bookmark) == null) item.querySelector('#mCk').click()
  }
  document.querySelector('.btn_del').click()
  if (
    document.querySelector('.info_none') != null ||
    items.length == document.querySelectorAll(bookmark).length
  )
    clearInterval(interval)
}, 1000)
