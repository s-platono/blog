export const actions = {
  async nuxtServerInit({commit}, {$content}) {
    const tags = await $content('tags')
      .only(['name', 'description', 'img', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()
    commit("setTags", tags)
  }
}

export const state = () => ({
  tags: []
})

export const mutations = {
  setTags(state, data) {
    state.tags.push(...data);
  }
}

export const getters = {
  tags: s => s.tags
}
