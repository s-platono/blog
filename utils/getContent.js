import global from "~/utils/global";

//TODO 04.04.2022 - need refactor

export default async ($content, params, error) => {
  const currentPage = parseInt(params.page)

  const allArticles = !params.tag ?
    await $content('articles').fetch() :
    await $content('articles').where({ tags: { $contains: params.tag.name } }).fetch();

  const totalArticles = allArticles.length

  // use Math.ceil to round up to the nearest whole number
  const lastPage = Math.ceil(totalArticles / global.perPage)

  // use the % (modulus) operator to get a whole remainder
  const lastPageCount = totalArticles % global.perPage === 0 ? global.perPage : totalArticles % global.perPage

  const skipNumber = () => {
    if (currentPage === 1) return 0
    if (currentPage === lastPage) return totalArticles - lastPageCount
    return (currentPage - 1) * global.perPage
  }
  let paginatedArticles

  if(params.tag) {
    paginatedArticles = await $content('articles')
      .only(['title', 'description', 'img', 'slug', 'tags', 'createdAt', 'author'])
      .where({ tags: { $contains: params.tag.name } })
      .sortBy('createdAt', 'asc')
      .limit(global.perPage)
      .skip(skipNumber())
      .fetch()
  } else {
    paginatedArticles = await $content('articles')
      .only(['title', 'description', 'img', 'slug', 'tags', 'createdAt', 'author'])
      .sortBy('createdAt', 'asc')
      .limit(global.perPage)
      .skip(skipNumber())
      .fetch()
  }


  if (currentPage === 0 || !paginatedArticles.length) {
    return error({statusCode: 404, message: 'No articles found!'})
  }

  return {
    allArticles,
    paginatedArticles,
  }
}
