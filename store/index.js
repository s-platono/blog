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
  authors: [],
  drawer: false,
  items: [
    {
      text: 'Home',
      href: '#!',
    },
    {
      text: 'About',
      href: '#about',
    },
  ],
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
  },
  setDrawer: (state, payload) => (state.drawer = payload),
  toggleDrawer: state => (state.drawer = !state.drawer),
}

export const getters = {
  tags: s => s.tags,
  articles: s => s.articles,
  authors: s => s.authors,

  article: s => slug => s.articles.filter(a => a.slug === slug)[0],
  tagList: s => tagList => s.tags.filter(t => tagList.includes(t.name)),
  author: s => slug => s.authors.filter(t => t.slug === slug)[0],
  categories: state => {
    const categories = []

    for (const article of state.articles) {
      if (
        !article.category ||
        categories.find(category => category.text === article.category)
      ) continue

      const text = article.category

      categories.push({
        text,
        href: '#!',
      })
    }

    return categories.sort().slice(0, 4)
  },
  links: (state, getters) => {
    return state.items.concat(getters.categories)
  },
}
