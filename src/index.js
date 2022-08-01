import MarkKeyword from './lib';

const sp = document.createElement('span')
sp.innerHTML = '毛毛、阴阴、他们是一丘之貉.'

const mark = new MarkKeyword({
  dNode: sp,
  keywords: [
    '毛毛',
    '阴阴',
    '貉'
  ],
  backgroundColor: 'blue'
})

document.body.innerHTML = mark.getHighlightHtml()