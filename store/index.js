export const actions = {
  async nuxtServerInit({commit}, {$content}) {
    const tags = await $content('tags')
      .only(['name', 'description', 'img', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()
    const articles = await $content('articles')
      // 
      .sortBy('createdAt', 'desc')
      .fetch()
    const authors = await $content('articles')
      .only(['author'])
      .sortBy('createdAt', 'desc')
      .fetch()
    const authorRes = []
    authors.map(it => it.author)
      .filter(author => {
        let idx = authorRes.findIndex(x => x.name === author.name)
        if(idx <= -1) authorRes.push(author)
      })

    commit("setTags", tags)
    commit("setArticles", articles)
    commit("setAuthors", authorRes)
  }
}

export const state = () => ({
  tags: [],
  articles: [],
  authors: []
})

export const mutations = {
  setTags: (state, data) => {
    state.tags.push(...data);
  },
  setArticles: (state, data) => {
    state.articles.push(...data)
  },
  setAuthors: (state, data) => {
    state.authors.push(...data)
  }
}

export const getters = {
  tags: s => s.tags,
  articles: s => s.articles,
  author: s => s.authors,

  article: s => slug => s.articles.filter(a => a.slug === slug)[0],
  tagList: s => tagList => {
    console.log(tagList)
    return s.tags.filter(t => tagList.includes(t.name))
  }
}
