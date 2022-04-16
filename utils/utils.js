export const formatDate = (date) => {
  const options = {year: 'numeric', month: 'long', day: 'numeric'}
  return new Date(date).toLocaleDateString('ru', options)
}

export const formatToc = (article) => {
  let lastParent = 0
  let result = []
  for (let key in article.toc) {
    let link = article.toc[key]
    if(link.depth === 2) {
      link.child = []
      lastParent = result.push(link) - 1
    } else {
      result[lastParent].child.push(link)
    }
  }
  return result
}
