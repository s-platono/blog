<template>
  <b-nav-form class="d-flex">
    <b-form-input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Search articles"
      size="sm"
      class="mr-sm-2"
    />
    <b-nav-item-dropdown right
                         v-show="articles.length"
                         ref="dropdownSearch"
    >
      <b-dropdown-item v-for="article of articles" :key="article.slug"
                       :to="{ name: 'article-slug', params: { slug: article.slug } }">
        {{ article.title }}
      </b-dropdown-item>
    </b-nav-item-dropdown>
  </b-nav-form>
</template>
<script>
export default {
  data() {
    return {
      searchQuery: '',
      articles: []
    }
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.articles = []
        this.$refs.dropdownSearch.visible = false
        return
      }
      this.articles = await this.$content('articles')
        .limit(6)
        .search(searchQuery)
        .fetch()
      if (this.articles.length > 0) this.$refs.dropdownSearch.visible = true
    }
  }
}
</script>
